import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqbuq750o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqbuq750o"/>`,
		"fallback": "streamline-plump:chat-bubble-oval-notification-remix",
	});
}

export default Component;
