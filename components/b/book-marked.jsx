import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/wnc3mkxbz.css';
import '../../css/x/x0ibh5bzn.css';
import '../../css/r/r5_mntbxb.css';
import '../../css/i/i3omf9zbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRlhuzCkJ" x1="9" x2="15" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRlhuzCkJ)" class="wnc3mkxbz"/><path class="wm-shine x0ibh5bzn"/><path class="r5_mntbxb wm-shine"/><path class="i3omf9zbg wm-shine"/></g>`,
		"fallback": "withicons-utsav:book-marked",
	});
}

export default Component;
