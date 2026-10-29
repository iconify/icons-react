import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uqzznibas.css';
import '../../css/h/hpledg8af.css';
import '../../css/m/mng_x_bpp.css';
import '../../css/x/x65lhepdw.css';
import '../../css/k/k5tkt6j_v.css';
import '../../css/n/nu_2gbs0c.css';
import '../../css/m/mt9bl0bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uqzznibas"/><path class="hpledg8af wm-k"/><path class="mng_x_bpp wm-a"/><path class="wm-s x65lhepdw"/><path class="k5tkt6j_v wm-k"/><path class="nu_2gbs0c wm-a"/><path class="mt9bl0bkb wm-s"/></g>`,
		"fallback": "withicons:hot-cocoa-sketch",
	});
}

export default Component;
