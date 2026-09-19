import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akcv2kb9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akcv2kb9u"/>`,
		"fallback": "game-icons:card-queen-spades",
	});
}

export default Component;
