import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpmgexb1o.css';
import '../../css/z/zp8fjxjrj.css';
import '../../css/n/nc_iiubre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 8.75 8.75)" class="kpmgexb1o"/><rect transform="rotate(90 0 15.07)scale(-1 1)" class="kpmgexb1o"/><rect transform="rotate(90 0 21.21)scale(-1 1)" class="kpmgexb1o"/><rect transform="matrix(0 -1 -1 0 21.21 8.93)" class="kpmgexb1o"/><rect transform="matrix(0 -1 -1 0 8.75 21.22)" class="kpmgexb1o"/><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="zp8fjxjrj"/><path class="nc_iiubre"/></g>`,
		"fallback": "andrsrxn:chess-board",
	});
}

export default Component;
