import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf6uh2ajn.css';
import '../../css/n/n-w0yccsj.css';
import '../../css/p/pjg6v4bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf6uh2ajn"/><path class="n-w0yccsj"/><path class="pjg6v4bqy"/>`,
		"fallback": "mingcute:chat-2-line",
	});
}

export default Component;
