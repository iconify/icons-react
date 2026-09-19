import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf4egu60r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf4egu60r"/>`,
		"fallback": "game-icons:half-log",
	});
}

export default Component;
