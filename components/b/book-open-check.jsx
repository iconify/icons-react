import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/nth6cmb3z.css';
import '../../css/v/v1r4lkbco.css';
import '../../css/y/ymyypdmfa.css';
import '../../css/s/s3g_ddg7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGEDmQ8bKF" x1="9.01" x2="15.01" y1="3.52" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGEDmQ8bKF)" class="nth6cmb3z"/><path class="v1r4lkbco wm-shine"/><path class="wm-shine ymyypdmfa"/><path class="s3g_ddg7k wm-shine"/></g>`,
		"fallback": "withicons-utsav:book-open-check",
	});
}

export default Component;
