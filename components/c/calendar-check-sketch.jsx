import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hym5deb8f.css';
import '../../css/f/fm1tunb1g.css';
import '../../css/e/e0e-wqovl.css';
import '../../css/v/vzmitu55h.css';
import '../../css/u/u0b9rldcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hym5deb8f"/><path class="fm1tunb1g wm-k"/><path class="e0e-wqovl wm-a"/><path class="vzmitu55h wm-k"/><path class="u0b9rldcl wm-a"/></g>`,
		"fallback": "withicons:calendar-check-sketch",
	});
}

export default Component;
