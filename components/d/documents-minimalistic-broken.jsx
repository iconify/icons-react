import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jj9sgub3y.css';
import '../../css/s/sn70fibvm.css';
import '../../css/r/rldmr4bdt.css';
import '../../css/d/dkgqo5bmm.css';
import '../../css/p/pa1nt9q2d.css';
import '../../css/l/lp-vx44ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jj9sgub3y"/><path class="sn70fibvm"/><path class="rldmr4bdt"/><path class="dkgqo5bmm"/><path class="pa1nt9q2d"/><path class="lp-vx44ck"/></g>`,
		"fallback": "solar:documents-minimalistic-broken",
	});
}

export default Component;
