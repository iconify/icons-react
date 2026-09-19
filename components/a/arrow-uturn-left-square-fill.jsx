import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu28e69yb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu28e69yb"/>`,
		"fallback": "f7:arrow-uturn-left-square-fill",
	});
}

export default Component;
