import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/opk43_ukr.css';
import '../../css/z/z8b6ep4dx.css';
import '../../css/q/qrqz59bvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="opk43_ukr"/><path class="z8b6ep4dx"/><path class="qrqz59bvc"/></g>`,
		"fallback": "solar:bill-check-broken",
	});
}

export default Component;
