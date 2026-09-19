import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o0c0kablb.css';
import '../../css/y/yanp9fbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o0c0kablb"/><path class="yanp9fbrr"/></g>`,
		"fallback": "hugeicons:goal",
	});
}

export default Component;
