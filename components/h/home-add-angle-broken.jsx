import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a6jo9qb1m.css';
import '../../css/p/pz_5h6bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a6jo9qb1m"/><path class="pz_5h6bcx"/></g>`,
		"fallback": "solar:home-add-angle-broken",
	});
}

export default Component;
