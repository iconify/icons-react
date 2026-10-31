import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h95s-svid.css';
import '../../css/y/yrdnxxrcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h95s-svid"/><path class="yrdnxxrcz"/></g>`,
		"fallback": "coolicons:chess-bulk-round",
	});
}

export default Component;
