import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nw4q19_ui.css';
import '../../css/g/gkfk6p_mj.css';
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
		"content": `<g class="ipq1z-bjh"><path class="nw4q19_ui"/><path class="gkfk6p_mj"/><path class="si_mtzbvj"/><path class="dqjnc-e1v"/></g>`,
		"fallback": "solar:clapperboard-broken",
	});
}

export default Component;
