import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz2j1vbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz2j1vbqp"/>`,
		"fallback": "mynaui:chat-messages-solid",
	});
}

export default Component;
