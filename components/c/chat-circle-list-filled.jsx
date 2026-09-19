import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wekkzsr2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wekkzsr2i"/>`,
		"fallback": "griddy-icons:chat-circle-list-filled",
	});
}

export default Component;
