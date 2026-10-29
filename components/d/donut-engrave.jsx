import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nca9-y1ca.css';
import '../../css/g/gs0z3j49t.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/z/zl8syfbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nca9-y1ca wm-k"/><path class="gs0z3j49t wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="hbi8hhkfx wm-k"/><path class="wm-a zl8syfbae"/></g>`,
		"fallback": "withicons:donut-engrave",
	});
}

export default Component;
