import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/d/dk3p2vl6p.css';
import '../../css/u/ua41kvbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="lx_j5lb4z"/><circle transform="rotate(90 12 12)" class="mpf1g8bav"/><path class="dk3p2vl6p"/><path class="ua41kvbsi"/></g>`,
		"fallback": "andrsrxn:help",
	});
}

export default Component;
