import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/ni_je7bbj.css';
import '../../css/n/nyek_kwce.css';
import '../../css/b/bkw1_ab-v.css';
import '../../css/n/nwv14igzu.css';
import '../../css/c/cka5bk65b.css';
import '../../css/c/ce9wmsaun.css';
import '../../css/i/ivh_bib5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMveWEbFX" x1="9" x2="15" y1="1.37" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGMveWEbFX)" class="ni_je7bbj"/><path class="nyek_kwce wm-s"/><path class="bkw1_ab-v wm-shine"/><path class="nwv14igzu wm-shine"/><path class="cka5bk65b wm-shine"/><path class="ce9wmsaun wm-shine"/><path class="ivh_bib5r wm-shine"/></g>`,
		"fallback": "withicons-utsav:cloud-download",
	});
}

export default Component;
