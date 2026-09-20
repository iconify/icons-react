import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we0x77s-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we0x77s-e"/>`,
		"fallback": "mdi:cards-spade-outline",
	});
}

export default Component;
