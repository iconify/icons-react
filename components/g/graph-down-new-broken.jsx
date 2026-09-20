import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ley58n3yy.css';
import '../../css/u/u00ey8bps.css';
import '../../css/a/ab62pjuns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ley58n3yy"/><circle class="u00ey8bps"/><path class="ab62pjuns"/></g>`,
		"fallback": "solar:graph-down-new-broken",
	});
}

export default Component;
