import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j64rr6bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j64rr6bcm"/>`,
		"fallback": "reicon:chat-square-like",
	});
}

export default Component;
