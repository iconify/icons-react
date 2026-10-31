import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mxv--jldm.css';
import '../../css/q/q59vtq10u.css';
import '../../css/g/ggnc_l97e.css';
import '../../css/i/inhs5_b8f.css';
import '../../css/t/t12krebbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mxv--jldm wm-shadow"/><path class="q59vtq10u"/><path class="ggnc_l97e"/><path class="inhs5_b8f"/><path class="t12krebbo"/></g>`,
		"fallback": "withicons-retro:dholak",
	});
}

export default Component;
