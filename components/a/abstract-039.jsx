import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wipa-hbze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wipa-hbze"/>`,
		"fallback": "game-icons:abstract-039",
	});
}

export default Component;
