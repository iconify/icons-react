import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcos6abkc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcos6abkc"/>`,
		"fallback": "game-icons:card-4-spades",
	});
}

export default Component;
