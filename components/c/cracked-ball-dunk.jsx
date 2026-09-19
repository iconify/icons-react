import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2bra0b2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2bra0b2y"/>`,
		"fallback": "game-icons:cracked-ball-dunk",
	});
}

export default Component;
