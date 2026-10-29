import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mc09_q5oi.css';
import '../../css/j/j1q041bll.css';
import '../../css/f/fy7v02hzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mc09_q5oi"/><path class="j1q041bll wm-shadow"/><path class="fy7v02hzd"/></g>`,
		"fallback": "withicons:chevron-left-engrave",
	});
}

export default Component;
