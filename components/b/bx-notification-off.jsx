import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv4rrqlkh.css';
import '../../css/h/h68a5vtzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv4rrqlkh"/><circle class="h68a5vtzz"/>`,
		"fallback": "bx:bx-notification-off",
	});
}

export default Component;
