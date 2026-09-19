import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8dhuidzf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8dhuidzf"/>`,
		"fallback": "game-icons:abstract-006",
	});
}

export default Component;
