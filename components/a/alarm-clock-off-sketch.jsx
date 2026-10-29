import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dzyu15eii.css';
import '../../css/v/vadmmzbem.css';
import '../../css/q/qfc1gtf3w.css';
import '../../css/o/o3c38abvv.css';
import '../../css/f/fa6idnbiz.css';
import '../../css/p/p_2opccie.css';
import '../../css/w/wcjn1091m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dzyu15eii"/><path class="vadmmzbem wm-k"/><path class="qfc1gtf3w wm-a"/><path class="o3c38abvv wm-s"/><path class="fa6idnbiz wm-k"/><path class="p_2opccie wm-a"/><path class="wcjn1091m wm-s"/></g>`,
		"fallback": "withicons:alarm-clock-off-sketch",
	});
}

export default Component;
