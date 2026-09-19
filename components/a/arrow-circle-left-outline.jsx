import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h84l40bgj.css';
import '../../css/w/wckr9kb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h84l40bgj"/><path class="wckr9kb1z"/>`,
		"fallback": "eva:arrow-circle-left-outline",
	});
}

export default Component;
