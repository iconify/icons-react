import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk2epqnnk.css';
import '../../css/o/o05aal2al.css';
import '../../css/c/cd9tdrbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="kk2epqnnk"/><rect class="o05aal2al"/><path class="cd9tdrbgq"/></g>`,
		"fallback": "andrsrxn:calendar-off",
	});
}

export default Component;
