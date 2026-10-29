import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/urw3wlb_h.css';
import '../../css/k/k-7ob-64q.css';
import '../../css/m/mdrht3tia.css';
import '../../css/w/wx8xdljlm.css';
import '../../css/c/cnrsspubr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="urw3wlb_h"/><path class="k-7ob-64q wm-k"/><path class="mdrht3tia wm-a"/><path class="wm-k wx8xdljlm"/><path class="cnrsspubr wm-a"/></g>`,
		"fallback": "withicons:cup-soda-sketch",
	});
}

export default Component;
