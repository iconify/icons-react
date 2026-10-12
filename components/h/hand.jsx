import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8t-nlb-y.css';
import '../../css/k/k5gnh_wwp.css';
import '../../css/j/j1_waebmq.css';
import '../../css/f/f08_6jbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8t-nlb-y"/><path class="k5gnh_wwp"/><path class="j1_waebmq"/><path class="f08_6jbtp"/></g>`,
		"fallback": "andrsrxn:hand",
	});
}

export default Component;
