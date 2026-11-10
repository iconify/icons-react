import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zrpay1lxl.css';
import '../../css/p/px2equbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zrpay1lxl"/><path class="px2equbbv"/></g>`,
		"fallback": "andrsrxn:bookmark-filled",
	});
}

export default Component;
