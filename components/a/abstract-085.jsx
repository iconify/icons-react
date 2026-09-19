import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnolv9s0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnolv9s0r"/>`,
		"fallback": "game-icons:abstract-085",
	});
}

export default Component;
