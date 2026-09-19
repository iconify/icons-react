import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw6l5vb8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw6l5vb8c"/>`,
		"fallback": "game-icons:abstract-040",
	});
}

export default Component;
