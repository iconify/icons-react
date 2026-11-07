import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aymhwhb8v.css';
import '../../css/e/er5hmdbdf.css';
import '../../css/d/deivui2dq.css';
import '../../css/x/xhkm7y-hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aymhwhb8v"/><path class="er5hmdbdf"/><path class="deivui2dq"/><path class="xhkm7y-hu"/></g>`,
		"fallback": "solar:calculator-linear",
	});
}

export default Component;
