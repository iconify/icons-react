import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d76br_vtg.css';
import '../../css/p/pzh9jhb6y.css';
import '../../css/a/a6lfmac3o.css';
import '../../css/h/h8wqmtb6z.css';
import '../../css/v/vn59_jbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d76br_vtg"/><path class="pzh9jhb6y"/><path class="a6lfmac3o"/><path class="h8wqmtb6z"/><path class="vn59_jbgk"/></g>`,
		"fallback": "solar:backpack-broken",
	});
}

export default Component;
