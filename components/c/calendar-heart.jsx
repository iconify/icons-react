import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6whkdktl.css';
import '../../css/x/xnu394bzj.css';
import '../../css/o/o95fthluk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x6whkdktl"/><path class="xnu394bzj"/><path class="o95fthluk"/></g>`,
		"fallback": "andrsrxn:calendar-heart",
	});
}

export default Component;
