import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm1hixbrb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm1hixbrb"/>`,
		"fallback": "fa7-brands:edge",
	});
}

export default Component;
