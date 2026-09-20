import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj0k13b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj0k13b2d"/>`,
		"fallback": "ri:chat-poll-fill",
	});
}

export default Component;
