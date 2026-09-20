import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmf0a8bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmf0a8bvy"/>`,
		"fallback": "ri:chat-voice-line",
	});
}

export default Component;
