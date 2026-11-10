import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yo27d2b-f.css';
import '../../css/m/m0_l_te8u.css';
import '../../css/l/lpka66bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yo27d2b-f"/><path class="m0_l_te8u"/><path class="lpka66bfm"/></g>`,
		"fallback": "andrsrxn:calendar-warning",
	});
}

export default Component;
