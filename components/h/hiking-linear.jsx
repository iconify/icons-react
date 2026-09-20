import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgksoiblo.css';
import '../../css/p/pun52ub0q.css';
import '../../css/w/wjmjm45ch.css';
import '../../css/c/cu7xy9b9y.css';
import '../../css/m/mx2h-ui3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lgksoiblo"/><path class="pun52ub0q"/><path class="wjmjm45ch"/><path class="cu7xy9b9y"/><path class="mx2h-ui3u"/></g>`,
		"fallback": "solar:hiking-linear",
	});
}

export default Component;
