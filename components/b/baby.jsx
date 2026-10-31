import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/uts-f0sln.css';
import '../../css/w/w5-k5d8la.css';
import '../../css/n/nluqwvb3z.css';
import '../../css/x/x7mv0h8tc.css';
import '../../css/c/cga3ribxb.css';
import '../../css/s/stnzpynxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhvR8zegt" x1="10" x2="14" y1="4" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="uts-f0sln wm-k"/><path class="w5-k5d8la wm-k"/><path fill="url(#SVGhvR8zegt)" class="nluqwvb3z wm-k"/><path class="wm-shadow x7mv0h8tc"/><path class="cga3ribxb wm-shine"/><path class="stnzpynxf wm-shine"/></g>`,
		"fallback": "withicons-valentine:baby",
	});
}

export default Component;
