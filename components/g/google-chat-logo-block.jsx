import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvzh4z13o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mvzh4z13o"/>`,
		"fallback": "streamline-logos:google-chat-logo-block",
	});
}

export default Component;
