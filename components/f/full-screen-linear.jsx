import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ercgknd1i.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/p/p79yqm6ra.css';
import '../../css/r/ros5bvrws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ercgknd1i"/><path class="x-1lf64uh"/><path class="p79yqm6ra"/><path class="ros5bvrws"/></g>`,
		"fallback": "solar:full-screen-linear",
	});
}

export default Component;
