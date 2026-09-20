import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qslax4b_q.css';
import '../../css/r/rsmtigbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qslax4b_q"/><path class="rsmtigbwq"/></g>`,
		"fallback": "solar:infinite-bold-duotone",
	});
}

export default Component;
