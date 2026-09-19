import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt1n69bok.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt1n69bok"/>`,
		"fallback": "game-icons:abstract-086",
	});
}

export default Component;
