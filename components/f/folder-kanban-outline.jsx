import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5r5wp2qu.css';
import '../../css/s/s-matgtmc.css';
import '../../css/x/x4pfyzk4p.css';
import '../../css/w/w_8fmvbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i5r5wp2qu"/><path class="s-matgtmc"/><path class="x4pfyzk4p"/><path clip-rule="evenodd" class="w_8fmvbbm"/></g>`,
		"fallback": "solar:folder-kanban-outline",
	});
}

export default Component;
