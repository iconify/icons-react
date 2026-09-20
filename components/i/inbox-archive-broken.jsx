import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xyrhgtb_n.css';
import '../../css/m/mcy0xgi_f.css';
import '../../css/i/i_swdrbum.css';
import '../../css/r/rr_l-tqjq.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xyrhgtb_n"/><path class="mcy0xgi_f"/><path class="i_swdrbum"/><path class="rr_l-tqjq"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:inbox-archive-broken",
	});
}

export default Component;
