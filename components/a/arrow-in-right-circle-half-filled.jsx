import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0d_fibqc.css';
import '../../css/j/jgmlxzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0d_fibqc"/><path class="jgmlxzbvj"/>`,
		"fallback": "boxicons:arrow-in-right-circle-half-filled",
	});
}

export default Component;
