import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gvmf_2bye.css';
import '../../css/u/up_uepidw.css';
import '../../css/i/ihhg1ni_f.css';
import '../../css/m/m4_wvpbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gvmf_2bye wm-deco"/><path class="up_uepidw wm-k"/><path class="ihhg1ni_f wm-k"/><path class="m4_wvpbdd wm-a"/></g>`,
		"fallback": "withicons:door-open-sketch",
	});
}

export default Component;
