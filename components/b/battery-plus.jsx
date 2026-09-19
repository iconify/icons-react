import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9ock4bjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9ock4bjg"/>`,
		"fallback": "game-icons:battery-plus",
	});
}

export default Component;
