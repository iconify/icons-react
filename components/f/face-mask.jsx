import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j75_v3bqv.css';
import '../../css/y/ygb-j53ur.css';
import '../../css/l/l8kbryvga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j75_v3bqv"/><path class="ygb-j53ur"/><path class="l8kbryvga"/></g>`,
		"fallback": "andrsrxn:face-mask",
	});
}

export default Component;
