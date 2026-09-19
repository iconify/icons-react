import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxg7w3ttx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxg7w3ttx"/>`,
		"fallback": "game-icons:abstract-003",
	});
}

export default Component;
