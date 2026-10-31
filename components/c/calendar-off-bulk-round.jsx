import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5qf0kbcw.css';
import '../../css/o/o6sgqymxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m5qf0kbcw"/><path class="o6sgqymxx"/></g>`,
		"fallback": "coolicons:calendar-off-bulk-round",
	});
}

export default Component;
