import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9tu38bfk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9tu38bfk"/>`,
		"fallback": "game-icons:hot-meal",
	});
}

export default Component;
