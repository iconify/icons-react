import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymp_cgxhb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymp_cgxhb"/>`,
		"fallback": "zondicons:arrow-outline-up",
	});
}

export default Component;
