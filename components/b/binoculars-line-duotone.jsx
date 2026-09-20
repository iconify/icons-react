import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cx2a49bhn.css';
import '../../css/u/u8qhtt3pv.css';
import '../../css/q/qxw3kzbst.css';
import '../../css/q/q60im6_xs.css';
import '../../css/h/h4r2f10fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cx2a49bhn"/><path class="u8qhtt3pv"/><path class="qxw3kzbst"/><path class="q60im6_xs"/><path class="h4r2f10fp"/></g>`,
		"fallback": "solar:binoculars-line-duotone",
	});
}

export default Component;
