import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlby0xbcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlby0xbcu"/>`,
		"fallback": "game-icons:boomerang-sun",
	});
}

export default Component;
