import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mt2qoyrju.css';
import '../../css/t/tc_n04vxp.css';
import '../../css/n/n2fikpbkb.css';
import '../../css/p/pnrbgxb5c.css';
import '../../css/k/k6q1i4brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mt2qoyrju wm-k"/><path class="tc_n04vxp wm-a"/><path class="n2fikpbkb wm-shadow"/><path class="pnrbgxb5c wm-a"/><path class="k6q1i4brf wm-k"/></g>`,
		"fallback": "withicons:broom-engrave",
	});
}

export default Component;
