import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inftcdmqk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="inftcdmqk"/>`,
		"fallback": "heroicons-solid:chat-bubble-oval-left-ellipsis",
	});
}

export default Component;
