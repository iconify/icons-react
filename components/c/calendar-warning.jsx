import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnk4urbac.css';
import '../../css/v/v1odcqarg.css';
import '../../css/i/ib58-zslp.css';
import '../../css/l/lpka66bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="vnk4urbac"/><rect class="v1odcqarg"/><path class="ib58-zslp"/><path class="lpka66bfm"/></g>`,
		"fallback": "andrsrxn:calendar-warning",
	});
}

export default Component;
