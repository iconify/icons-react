import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hahzwslpv.css';
import '../../css/v/v0ldy8l7g.css';
import '../../css/w/wuumjo_7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hahzwslpv"/><path class="v0ldy8l7g"/><path class="wuumjo_7q"/></g>`,
		"fallback": "solar:copy-close-linear",
	});
}

export default Component;
