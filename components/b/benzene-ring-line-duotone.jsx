import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k7vqiwbtv.css';
import '../../css/q/qnft27d1b.css';
import '../../css/r/rccpmk6eu.css';
import '../../css/m/mwt6b6czh.css';
import '../../css/i/i0grte88a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k7vqiwbtv"/><path class="qnft27d1b"/><path class="rccpmk6eu"/><path class="mwt6b6czh"/><path class="i0grte88a"/></g>`,
		"fallback": "solar:benzene-ring-line-duotone",
	});
}

export default Component;
