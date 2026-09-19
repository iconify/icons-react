import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3-ee_4_x.css';
import '../../css/t/t1iqx_u1n.css';
import '../../css/v/v_knncixm.css';
import '../../css/q/ql8bw2bit.css';
import '../../css/h/hbkcmnb0r.css';
import '../../css/w/wpdvd2doe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d3-ee_4_x"/><path class="t1iqx_u1n"/><path class="v_knncixm"/><path class="ql8bw2bit"/><path class="hbkcmnb0r"/><path class="wpdvd2doe"/></g>`,
		"fallback": "fluent-emoji-flat:convenience-store",
	});
}

export default Component;
