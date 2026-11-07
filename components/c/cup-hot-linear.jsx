import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c37ble74i.css';
import '../../css/t/tnz_2pl9f.css';
import '../../css/u/up4-ovb9f.css';
import '../../css/h/ht6mdpbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c37ble74i"/><path class="tnz_2pl9f"/><path class="up4-ovb9f"/><path class="ht6mdpbgs"/></g>`,
		"fallback": "solar:cup-hot-linear",
	});
}

export default Component;
