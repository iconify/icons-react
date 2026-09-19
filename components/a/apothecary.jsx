import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybj0j1bcb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybj0j1bcb"/>`,
		"fallback": "game-icons:apothecary",
	});
}

export default Component;
