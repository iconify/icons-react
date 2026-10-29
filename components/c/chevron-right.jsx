import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urvk3ljoi.css';
import '../../css/t/tdovuczxl.css';
import '../../css/e/eo30z-b8x.css';
import '../../css/f/fs7-ihb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="urvk3ljoi wm-k"/><path class="tdovuczxl wm-k"/><path class="eo30z-b8x wm-k"/><path class="fs7-ihb4l wm-shine"/></g>`,
		"fallback": "withicons-anime:chevron-right",
	});
}

export default Component;
