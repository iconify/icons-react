import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cx2a49bhn.css';
import '../../css/u/u8qhtt3pv.css';
import '../../css/q/qxw3kzbst.css';
import '../../css/f/f-6g2x7la.css';
import '../../css/w/wwmhxmb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cx2a49bhn"/><path class="u8qhtt3pv"/><path class="qxw3kzbst"/><path class="f-6g2x7la"/><path class="wwmhxmb7s"/></g>`,
		"fallback": "solar:binoculars-line-duotone",
	});
}

export default Component;
