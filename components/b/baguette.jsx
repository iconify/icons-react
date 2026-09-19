import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efz1s0b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efz1s0b4u"/>`,
		"fallback": "bx:baguette",
	});
}

export default Component;
