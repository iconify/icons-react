import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikwr87_mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikwr87_mo"/>`,
		"fallback": "bx:bx-caret-down",
	});
}

export default Component;
