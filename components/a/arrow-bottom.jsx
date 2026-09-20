import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faps_v1gv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faps_v1gv"/>`,
		"fallback": "oi:arrow-bottom",
	});
}

export default Component;
