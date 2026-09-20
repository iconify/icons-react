import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u00ey8bps.css';
import '../../css/m/m8mr6gb4u.css';
import '../../css/a/ab62pjuns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="u00ey8bps"/><path class="m8mr6gb4u"/><path class="ab62pjuns"/></g>`,
		"fallback": "solar:graph-new-up-broken",
	});
}

export default Component;
