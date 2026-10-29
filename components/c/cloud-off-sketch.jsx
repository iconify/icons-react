import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qczcrlmsi.css';
import '../../css/e/eh9yg0bsm.css';
import '../../css/b/bxel2rbnc.css';
import '../../css/b/b1xdfvzax.css';
import '../../css/t/ts2ozy7et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qczcrlmsi"/><path class="eh9yg0bsm wm-k"/><path class="bxel2rbnc wm-s"/><path class="b1xdfvzax wm-k"/><path class="ts2ozy7et wm-s"/></g>`,
		"fallback": "withicons:cloud-off-sketch",
	});
}

export default Component;
