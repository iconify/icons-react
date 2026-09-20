import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ut31b35ci.css';
import '../../css/p/p09d0ab_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ut31b35ci"/><path class="p09d0ab_n"/></g>`,
		"fallback": "solar:call-chat-rounded-bold-duotone",
	});
}

export default Component;
