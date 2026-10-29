import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z3nm_s4sb.css';
import '../../css/m/mqdjwcc2h.css';
import '../../css/z/z-pktbist.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="z3nm_s4sb"/><path class="mqdjwcc2h wm-k"/><path class="wm-a z-pktbist"/></g>`,
		"fallback": "withicons:eye-sketch",
	});
}

export default Component;
