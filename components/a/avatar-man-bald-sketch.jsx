import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/az1pmbcop.css';
import '../../css/n/nq451z9tv.css';
import '../../css/w/wkqr97bjn.css';
import '../../css/h/hn4n2eqzu.css';
import '../../css/w/wz_hfyb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="az1pmbcop"/><path class="nq451z9tv wm-k"/><path class="wkqr97bjn wm-a"/><path class="hn4n2eqzu wm-k"/><path class="wm-a wz_hfyb1r"/></g>`,
		"fallback": "withicons:avatar-man-bald-sketch",
	});
}

export default Component;
