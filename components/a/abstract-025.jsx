import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwi7vl9tb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwi7vl9tb"/>`,
		"fallback": "game-icons:abstract-025",
	});
}

export default Component;
