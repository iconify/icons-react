import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhhug9b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rhhug9b7q"/>`,
		"fallback": "streamline-logos:google-hangouts-chat-logo-solid",
	});
}

export default Component;
