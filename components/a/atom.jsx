import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa6bx_bwh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa6bx_bwh"/>`,
		"fallback": "la:atom",
	});
}

export default Component;
