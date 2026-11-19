import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i8ikbmb0m.css';
import '../../css/j/j5x25ac_m.css';
import '../../css/a/a-x6jfb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i8ikbmb0m"/><path class="j5x25ac_m"/><path class="a-x6jfb7v"/></g>`,
		"fallback": "andrsrxn:aspect-ratio-1-85-1",
	});
}

export default Component;
