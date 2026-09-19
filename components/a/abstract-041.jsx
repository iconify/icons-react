import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2qg4186r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2qg4186r"/>`,
		"fallback": "game-icons:abstract-041",
	});
}

export default Component;
