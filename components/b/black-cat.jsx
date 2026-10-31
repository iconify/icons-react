import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/j2yi0xgyc.css';
import '../../css/b/brwa6ab-p.css';
import '../../css/n/ns-thlbum.css';
import '../../css/c/c9j6s1b9o.css';
import '../../css/c/cbhy1lbgm.css';
import '../../css/x/x5ae_4bnt.css';
import '../../css/g/gnjn9nbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhkIyecHM" x1="8.87" x2="14.87" y1="2.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGhkIyecHM)" class="j2yi0xgyc"/><path class="brwa6ab-p wm-a"/><path class="ns-thlbum wm-shine"/><path class="c9j6s1b9o wm-shine"/><path class="cbhy1lbgm wm-shine"/><path class="wm-shine x5ae_4bnt"/><path class="gnjn9nbik wm-shine"/></g>`,
		"fallback": "withicons-utsav:black-cat",
	});
}

export default Component;
