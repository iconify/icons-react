import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwtkhk-mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fwtkhk-mo"/>`,
		"fallback": "reicon:chat-round-line-filled",
	});
}

export default Component;
