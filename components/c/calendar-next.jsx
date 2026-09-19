import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/peqcegb8v.css';
import '../../css/w/wioaclbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="peqcegb8v"/><path clip-rule="evenodd" class="wioaclbdo"/></g>`,
		"fallback": "gg:calendar-next",
	});
}

export default Component;
