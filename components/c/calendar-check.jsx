import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzxh7wf3p.css';
import '../../css/e/e2ip0ebdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="uzxh7wf3p"/><path class="e2ip0ebdq"/></g>`,
		"fallback": "andrsrxn:calendar-check",
	});
}

export default Component;
