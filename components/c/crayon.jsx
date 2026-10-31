import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/p7wjnx2nr.css';
import '../../css/l/l7dn4x7ic.css';
import '../../css/d/dcvtymguk.css';
import '../../css/z/zp_uf6b_f.css';
import '../../css/z/zhfml8_hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGAWbxBbor" x1="10.9" x2="14.9" y1="3.14" y2="19.07" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="p7wjnx2nr wm-k"/><path class="l7dn4x7ic wm-deco"/><path fill="url(#SVGAWbxBbor)" class="dcvtymguk wm-k"/><path class="wm-shadow zp_uf6b_f"/><path class="wm-shine zhfml8_hf"/></g>`,
		"fallback": "withicons-valentine:crayon",
	});
}

export default Component;
