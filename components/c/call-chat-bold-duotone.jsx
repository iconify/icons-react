import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j98da8bnt.css';
import '../../css/u/ut31b35ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j98da8bnt"/><path class="ut31b35ci"/></g>`,
		"fallback": "solar:call-chat-bold-duotone",
	});
}

export default Component;
