import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyh_xgu6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fyh_xgu6y"/>`,
		"fallback": "solar:chat-round-money-outline",
	});
}

export default Component;
