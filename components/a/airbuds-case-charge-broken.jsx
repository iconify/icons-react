import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y0do8_bvl.css';
import '../../css/i/il3n3pbvc.css';
import '../../css/k/ka16ahzxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y0do8_bvl"/><path class="il3n3pbvc"/><path class="ka16ahzxe"/></g>`,
		"fallback": "solar:airbuds-case-charge-broken",
	});
}

export default Component;
