import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e1_3ej_7l.css';
import '../../css/t/tnf8gbb-i.css';
import '../../css/l/l8q853blz.css';
import '../../css/f/f6a2dhcys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e1_3ej_7l"/><path class="tnf8gbb-i"/><path class="l8q853blz"/><path class="f6a2dhcys"/></g>`,
		"fallback": "solar:bill-linear",
	});
}

export default Component;
