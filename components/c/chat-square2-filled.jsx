import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxkp-qqyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qxkp-qqyn"/>`,
		"fallback": "reicon:chat-square2-filled",
	});
}

export default Component;
