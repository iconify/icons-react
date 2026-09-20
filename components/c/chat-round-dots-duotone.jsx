import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/co4rerbld.css';
import '../../css/u/ua8uvtg8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="co4rerbld"/><path class="ua8uvtg8w"/></g>`,
		"fallback": "reicon:chat-round-dots-duotone",
	});
}

export default Component;
