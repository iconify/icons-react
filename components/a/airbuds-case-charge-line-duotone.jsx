import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xo5liybaf.css';
import '../../css/y/y0do8_bvl.css';
import '../../css/i/il3n3pbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xo5liybaf"/><path class="y0do8_bvl"/><path class="il3n3pbvc"/></g>`,
		"fallback": "solar:airbuds-case-charge-line-duotone",
	});
}

export default Component;
