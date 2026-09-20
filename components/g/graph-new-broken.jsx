import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ab62pjuns.css';
import '../../css/f/fs60iccsb.css';
import '../../css/u/u00ey8bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ab62pjuns"/><path class="fs60iccsb"/><circle class="u00ey8bps"/></g>`,
		"fallback": "solar:graph-new-broken",
	});
}

export default Component;
