import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/ud2rg3gxh.css';
import '../../css/e/ea2kcv-zw.css';
import '../../css/r/rhyem2bgu.css';
import '../../css/v/vq81usb1d.css';
import '../../css/x/xbx_lhgnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN1oYpimo" x1="10" x2="14" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ud2rg3gxh wm-k"/><path class="ea2kcv-zw wm-deco"/><path fill="url(#SVGN1oYpimo)" class="rhyem2bgu wm-k"/><path class="vq81usb1d wm-shadow"/><path class="wm-shine xbx_lhgnb"/></g>`,
		"fallback": "withicons-valentine:align-right",
	});
}

export default Component;
