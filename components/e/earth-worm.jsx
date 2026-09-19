import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oodhp_big.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oodhp_big"/>`,
		"fallback": "game-icons:earth-worm",
	});
}

export default Component;
