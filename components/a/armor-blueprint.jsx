import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikpt8rj5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikpt8rj5s"/>`,
		"fallback": "game-icons:armor-blueprint",
	});
}

export default Component;
