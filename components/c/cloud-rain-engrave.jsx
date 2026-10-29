import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_jv868wi.css';
import '../../css/u/uyg_llr-r.css';
import '../../css/h/h13gbmb1u.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/d/dwntyeyxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u_jv868wi wm-k"/><path class="uyg_llr-r wm-a"/><path class="h13gbmb1u wm-shadow"/><path class="lhr7mp78x wm-k"/><path class="dwntyeyxt wm-a"/></g>`,
		"fallback": "withicons:cloud-rain-engrave",
	});
}

export default Component;
