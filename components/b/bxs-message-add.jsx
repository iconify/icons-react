import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1her1mbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1her1mbe"/>`,
		"fallback": "bx:bxs-message-add",
	});
}

export default Component;
