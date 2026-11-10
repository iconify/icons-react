import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sr28_0vuq.css';
import '../../css/w/wo5nanh_o.css';
import '../../css/s/stbp-zbzm.css';
import '../../css/o/ohiy_9w1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sr28_0vuq"/><path class="wo5nanh_o"/><path class="stbp-zbzm"/><path class="ohiy_9w1k"/></g>`,
		"fallback": "andrsrxn:calendar-edit",
	});
}

export default Component;
