import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mzfulsbxv.css';
import '../../css/y/ymtnmml2s.css';
import '../../css/r/ricczsbtc.css';
import '../../css/r/rqrd5htoz.css';
import '../../css/k/k6thxr0pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="mzfulsbxv wm-shadow"/><path class="wm-shadow ymtnmml2s"/><path class="ricczsbtc"/><path class="rqrd5htoz"/><path class="k6thxr0pu wm-s"/></g>`,
		"fallback": "withicons-brutal:bell-plus",
	});
}

export default Component;
