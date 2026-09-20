import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf6uh2ajn.css';
import '../../css/r/rco1lvblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf6uh2ajn"/><path class="rco1lvblh"/>`,
		"fallback": "mingcute:chat-2-ai-line",
	});
}

export default Component;
