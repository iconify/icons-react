import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dzv5cqagr.css';
import '../../css/r/r1pshfsrk.css';
import '../../css/m/m2oftwu5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dzv5cqagr"/><path class="r1pshfsrk"/><path class="m2oftwu5b"/></g>`,
		"fallback": "solar:bedside-table-3-bold-duotone",
	});
}

export default Component;
