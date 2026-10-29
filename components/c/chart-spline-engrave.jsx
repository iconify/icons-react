import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mts67banp.css';
import '../../css/i/i8ycrbbjm.css';
import '../../css/n/n1fnp97zj.css';
import '../../css/c/cw36_6mco.css';
import '../../css/f/fefa1ib-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mts67banp wm-k"/><path class="i8ycrbbjm wm-a"/><path class="n1fnp97zj wm-shadow"/><path class="cw36_6mco wm-a"/><path class="fefa1ib-u wm-k"/></g>`,
		"fallback": "withicons:chart-spline-engrave",
	});
}

export default Component;
