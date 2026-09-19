import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8op9voft.css';
import '../../css/w/wckr9kb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8op9voft"/><path class="wckr9kb1z"/>`,
		"fallback": "eva:arrow-circle-up-outline",
	});
}

export default Component;
