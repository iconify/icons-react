import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tputa705v.css';
import '../../css/z/z8b6ep4dx.css';
import '../../css/t/tnf8gbb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tputa705v"/><path class="z8b6ep4dx"/><path class="tnf8gbb-i"/></g>`,
		"fallback": "solar:bill-check-linear",
	});
}

export default Component;
