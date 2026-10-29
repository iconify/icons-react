import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nw1cx1s9s.css';
import '../../css/j/jtpaps-dz.css';
import '../../css/a/a4d7pyb5y.css';
import '../../css/f/f96bthguk.css';
import '../../css/e/e6z3lgs4b.css';
import '../../css/r/rma80ubwv.css';
import '../../css/t/tp2t01opa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nw1cx1s9s"/><path class="jtpaps-dz wm-k"/><path class="a4d7pyb5y wm-a"/><path class="f96bthguk wm-s"/><path class="e6z3lgs4b wm-k"/><path class="rma80ubwv wm-a"/><path class="tp2t01opa wm-s"/></g>`,
		"fallback": "withicons:calendar-search-sketch",
	});
}

export default Component;
