import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb_y__bve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb_y__bve"/>`,
		"fallback": "game-icons:card-10-spades",
	});
}

export default Component;
