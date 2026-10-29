import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n7_wef7ly.css';
import '../../css/s/sm-04seud.css';
import '../../css/f/f948om5qz.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/x/xj6txmbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n7_wef7ly wm-k"/><path class="sm-04seud wm-a"/><path class="f948om5qz wm-shadow"/><path class="f2iz_pbwp wm-k"/><path class="d3y9mw6db wm-k"/><path class="wm-a xj6txmbwe"/></g>`,
		"fallback": "withicons:avatar-person-engrave",
	});
}

export default Component;
