import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/einr_36wa.css';
import '../../css/r/ry6ouwbrz.css';
import '../../css/n/nxfzdyb0n.css';
import '../../css/i/itm7sabha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="einr_36wa"/><path class="ry6ouwbrz"/><path class="nxfzdyb0n"/><path class="itm7sabha"/></g>`,
		"fallback": "solar:hiking-minimalistic-broken",
	});
}

export default Component;
