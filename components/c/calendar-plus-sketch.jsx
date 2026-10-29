import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e-p3qibda.css';
import '../../css/e/e62p7-brb.css';
import '../../css/k/kmmsl8jac.css';
import '../../css/t/t4xpx9sko.css';
import '../../css/q/q9qgksbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e-p3qibda"/><path class="e62p7-brb wm-k"/><path class="kmmsl8jac wm-a"/><path class="t4xpx9sko wm-k"/><path class="q9qgksbhm wm-a"/></g>`,
		"fallback": "withicons:calendar-plus-sketch",
	});
}

export default Component;
