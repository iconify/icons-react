import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw4clab2s.css';
import '../../css/i/ih5_3ebyt.css';
import '../../css/h/h7pul15lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xw4clab2s"/><path class="ih5_3ebyt"/><path class="h7pul15lr"/></g>`,
		"fallback": "andrsrxn:earbuds-check",
	});
}

export default Component;
