import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/krnf_lb1i.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/z/z4bbp2bhq.css';
import '../../css/w/wje7qb1vj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="krnf_lb1i wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="vp3_m3b5w wm-k"/><path class="wm-a z4bbp2bhq"/><path class="wje7qb1vj wm-s"/></g>`,
		"fallback": "withicons:file-pdf-blueprint",
	});
}

export default Component;
