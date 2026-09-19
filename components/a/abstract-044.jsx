import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wga_h3mor.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wga_h3mor"/>`,
		"fallback": "game-icons:abstract-044",
	});
}

export default Component;
