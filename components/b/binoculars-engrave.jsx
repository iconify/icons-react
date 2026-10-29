import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pd-c8rb_b.css';
import '../../css/w/w_nj6nq5i.css';
import '../../css/g/gaam40bfx.css';
import '../../css/g/gdnuq8wfy.css';
import '../../css/g/g8_iol2hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pd-c8rb_b wm-k"/><path class="w_nj6nq5i wm-shadow"/><path class="gaam40bfx wm-k"/><path class="gdnuq8wfy wm-k"/><path class="g8_iol2hx wm-a"/></g>`,
		"fallback": "withicons:binoculars-engrave",
	});
}

export default Component;
