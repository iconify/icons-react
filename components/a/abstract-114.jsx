import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qql77t0dz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qql77t0dz"/>`,
		"fallback": "game-icons:abstract-114",
	});
}

export default Component;
