import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mi3n832qv.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/h/hwzeqfy5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mi3n832qv"/><circle class="mpf1g8bav"/><path class="hwzeqfy5q"/></g>`,
		"fallback": "andrsrxn:circle-half-horizontal",
	});
}

export default Component;
