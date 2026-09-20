import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2cf4lc6v.css';
import '../../css/o/o-_hhsjxp.css';
import '../../css/q/qa0-fabav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l2cf4lc6v"/><path class="o-_hhsjxp"/><path clip-rule="evenodd" class="qa0-fabav"/></g>`,
		"fallback": "solar:bedside-table-2-bold-duotone",
	});
}

export default Component;
