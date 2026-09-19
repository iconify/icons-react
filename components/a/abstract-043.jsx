import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2h7cbrvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2h7cbrvd"/>`,
		"fallback": "game-icons:abstract-043",
	});
}

export default Component;
