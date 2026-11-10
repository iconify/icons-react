import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2io95jwl.css';
import '../../css/c/cme0fibse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t2io95jwl"/><path class="cme0fibse"/></g>`,
		"fallback": "andrsrxn:calendar-off",
	});
}

export default Component;
