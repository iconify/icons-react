import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yyptcnxel.css';
import '../../css/w/w4l--qbhc.css';
import '../../css/u/ut33svvhu.css';
import '../../css/c/c_rt07bxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yyptcnxel"/><path class="w4l--qbhc"/><path class="ut33svvhu"/><path class="c_rt07bxs"/></g>`,
		"fallback": "streamline-freehand-color:cash-payment-sign-2",
	});
}

export default Component;
