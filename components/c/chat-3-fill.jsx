import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb0la0xpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb0la0xpp"/>`,
		"fallback": "mingcute:chat-3-fill",
	});
}

export default Component;
