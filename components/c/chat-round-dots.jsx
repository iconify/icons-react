import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aes7_9cqq.css';
import '../../css/w/wq_n-7f_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aes7_9cqq"/><path clip-rule="evenodd" class="wq_n-7f_l"/></g>`,
		"fallback": "reicon:chat-round-dots",
	});
}

export default Component;
