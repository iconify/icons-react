import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gb-723yon.css';
import '../../css/q/q4oz3o56q.css';
import '../../css/b/b0egytfya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gb-723yon"/><path class="q4oz3o56q"/><path clip-rule="evenodd" class="b0egytfya"/></g>`,
		"fallback": "solar:chat-round-quote-bold",
	});
}

export default Component;
