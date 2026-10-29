import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cuxfsccmz.css';
import '../../css/z/z2_-f_bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cuxfsccmz"/><path class="wm-a z2_-f_bkr"/></g>`,
		"fallback": "withicons:avatar-man-bald-solid",
	});
}

export default Component;
