import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a0pcr2bht.css';
import '../../css/c/cx5-x2bsy.css';
import '../../css/w/wyu6dlbwx.css';
import '../../css/x/xbpaam-ee.css';
import '../../css/q/qvlkt9duy.css';
import '../../css/y/ybgk0--2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a0pcr2bht"/><path class="cx5-x2bsy"/><path class="wyu6dlbwx"/><path class="xbpaam-ee"/><path class="qvlkt9duy"/><path class="ybgk0--2a"/></g>`,
		"fallback": "solar:car-linear",
	});
}

export default Component;
