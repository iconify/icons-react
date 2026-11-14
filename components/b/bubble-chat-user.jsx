import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/ao6h7dxtx.css';
import '../../css/a/apnm6db5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ao6h7dxtx"/><path class="apnm6db5u"/></g>`,
		"fallback": "hugeicons:bubble-chat-user",
	});
}

export default Component;
