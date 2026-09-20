import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/htmrikbhg.css';
import '../../css/t/t4uyv6usa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="htmrikbhg"/><path class="t4uyv6usa"/></g>`,
		"fallback": "nrk:edit",
	});
}

export default Component;
