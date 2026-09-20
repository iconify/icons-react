import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjacqcc1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjacqcc1v"/>`,
		"fallback": "tdesign:chat-bubble-error-filled",
	});
}

export default Component;
