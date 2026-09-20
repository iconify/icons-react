import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgksoiblo.css';
import '../../css/p/pun52ub0q.css';
import '../../css/r/rt-a0zb8h.css';
import '../../css/h/h6ikd3bsu.css';
import '../../css/m/mx2h-ui3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lgksoiblo"/><path class="pun52ub0q"/><path class="rt-a0zb8h"/><path class="h6ikd3bsu"/><path class="mx2h-ui3u"/></g>`,
		"fallback": "solar:hiking-broken",
	});
}

export default Component;
