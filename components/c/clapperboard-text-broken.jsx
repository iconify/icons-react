import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nw4q19_ui.css';
import '../../css/g/gkfk6p_mj.css';
import '../../css/p/p4bgj8o4w.css';
import '../../css/c/ck1800buq.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/d/dqjnc-e1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nw4q19_ui"/><path class="gkfk6p_mj"/><path class="p4bgj8o4w"/><path class="ck1800buq"/><path class="si_mtzbvj"/><path class="dqjnc-e1v"/></g>`,
		"fallback": "solar:clapperboard-text-broken",
	});
}

export default Component;
