import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jope4zbid.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jope4zbid"/>`,
		"fallback": "game-icons:card-9-spades",
	});
}

export default Component;
