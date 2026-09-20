import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6dht6bmk.css';
import '../../css/t/t_9tezxgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p6dht6bmk"/><path class="t_9tezxgj"/></g>`,
		"fallback": "reicon:chat-round-duotone",
	});
}

export default Component;
