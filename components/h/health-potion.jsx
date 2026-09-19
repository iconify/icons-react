import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc4c0sbzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc4c0sbzr"/>`,
		"fallback": "game-icons:health-potion",
	});
}

export default Component;
