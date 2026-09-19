import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mky1-gb8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mky1-gb8j"/>`,
		"fallback": "game-icons:card-8-spades",
	});
}

export default Component;
