import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5kki7y8v.css';
import '../../css/z/zq1x3tu8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j5kki7y8v"/><path class="zq1x3tu8g"/></g>`,
		"fallback": "andrsrxn:border-end",
	});
}

export default Component;
