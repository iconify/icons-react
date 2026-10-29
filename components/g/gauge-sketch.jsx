import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/id8-p4bmo.css';
import '../../css/p/p-e4iwb_m.css';
import '../../css/a/aavn8cvga.css';
import '../../css/d/d_k9hzb-w.css';
import '../../css/k/kigmoib5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="id8-p4bmo"/><path class="p-e4iwb_m wm-k"/><path class="aavn8cvga wm-a"/><path class="d_k9hzb-w wm-k"/><path class="kigmoib5x wm-a"/></g>`,
		"fallback": "withicons:gauge-sketch",
	});
}

export default Component;
