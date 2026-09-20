import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n2n5mdbxv.css';
import '../../css/e/eveygebuw.css';
import '../../css/w/wu-2fgbxv.css';
import '../../css/a/aqrzy7b8m.css';
import '../../css/s/see2fgboo.css';
import '../../css/u/urvjm_ymr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n2n5mdbxv"/><path class="eveygebuw"/><path class="wu-2fgbxv"/><path class="aqrzy7b8m"/><path class="see2fgboo"/><path class="urvjm_ymr"/></g>`,
		"fallback": "solar:gas-station-broken",
	});
}

export default Component;
