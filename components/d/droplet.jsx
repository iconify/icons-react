import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/k-m7dmb5y.css';
import '../../css/p/psqhckyep.css';
import '../../css/s/sp47xd2gz.css';
import '../../css/k/k9v82s-ar.css';
import '../../css/o/o5sik7q1w.css';
import '../../css/v/vi3pylbte.css';
import '../../css/f/fiousvbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGINyjEdHv" x1="10" x2="14" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="k-m7dmb5y wm-k"/><path class="psqhckyep wm-deco"/><path class="sp47xd2gz wm-k"/><path fill="url(#SVGINyjEdHv)" class="k9v82s-ar wm-k"/><path class="o5sik7q1w wm-shadow"/><path class="vi3pylbte wm-shine"/><path class="fiousvbey wm-shine"/></g>`,
		"fallback": "withicons-valentine:droplet",
	});
}

export default Component;
