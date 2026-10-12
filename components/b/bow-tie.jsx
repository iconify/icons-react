import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_nz2km3f.css';
import '../../css/x/xd7o8thgk.css';
import '../../css/f/frdjkvbwc.css';
import '../../css/c/cxmr7u86u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f_nz2km3f"/><path class="xd7o8thgk"/><rect transform="matrix(0 -1 -1 0 14.52 15.32)" class="frdjkvbwc"/><path class="cxmr7u86u"/></g>`,
		"fallback": "andrsrxn:bow-tie",
	});
}

export default Component;
