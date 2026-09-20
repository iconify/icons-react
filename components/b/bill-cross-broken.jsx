import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uiwsg29tk.css';
import '../../css/q/qrqz59bvc.css';
import '../../css/o/opk43_ukr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uiwsg29tk"/><path class="qrqz59bvc"/><path class="opk43_ukr"/></g>`,
		"fallback": "solar:bill-cross-broken",
	});
}

export default Component;
