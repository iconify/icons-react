import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl5wj4bmg.css';
import '../../css/j/jgmlxzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl5wj4bmg"/><path class="jgmlxzbvj"/>`,
		"fallback": "boxicons:arrow-in-right-stroke-circle-half",
	});
}

export default Component;
