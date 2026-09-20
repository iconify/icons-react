import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rwzkv6b2g.css';
import '../../css/u/uqhik9b3f.css';
import '../../css/d/d-03ckbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rwzkv6b2g"/><path class="uqhik9b3f"/><path class="d-03ckbqv"/></g>`,
		"fallback": "solar:history-2-broken",
	});
}

export default Component;
