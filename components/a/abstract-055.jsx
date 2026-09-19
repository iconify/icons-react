import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuy1p_-se.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuy1p_-se"/>`,
		"fallback": "game-icons:abstract-055",
	});
}

export default Component;
