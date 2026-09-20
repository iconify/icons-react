import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v5jc_nbbi.css';
import '../../css/q/q9yxfza0g.css';
import '../../css/y/y38gaub1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v5jc_nbbi"/><path class="q9yxfza0g"/><path class="y38gaub1c"/></g>`,
		"fallback": "solar:armchair-2-broken",
	});
}

export default Component;
