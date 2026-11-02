import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk7l2_b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk7l2_b1x"/>`,
		"fallback": "mingcute:chat-3-fill",
	});
}

export default Component;
