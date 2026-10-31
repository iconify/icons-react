import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/c/cv2xikb3v.css';
import '../../css/i/i2gc43b_j.css';
import '../../css/y/y28uklo7w.css';
import '../../css/t/tkqdwusaj.css';
import '../../css/r/rkak5nb3d.css';
import '../../css/v/v8masqbdz.css';
import '../../css/s/sysx5xsso.css';
import '../../css/a/a44f-ib1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="cv2xikb3v wm-k"/><path class="i2gc43b_j wm-s"/><path class="wm-deco y28uklo7w"/><path fill="url(#SVGWIPAFndQ)" class="tkqdwusaj wm-k"/><path class="rkak5nb3d wm-s"/><path class="v8masqbdz wm-shadow"/><path class="sysx5xsso wm-shine"/><path class="a44f-ib1d wm-shine"/></g>`,
		"fallback": "withicons-valentine:git-pull-request-closed",
	});
}

export default Component;
