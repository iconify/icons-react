import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fen0n320y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fen0n320y"/>`,
		"fallback": "mdi:cup-off-outline",
	});
}

export default Component;
