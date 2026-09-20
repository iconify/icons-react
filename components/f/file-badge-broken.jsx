import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/t/t4qaumccy.css';
import '../../css/m/m4qncdc5u.css';
import '../../css/h/h8kolzbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0cmz0boh"/><path class="t4qaumccy"/><circle class="m4qncdc5u"/><path class="h8kolzbuu"/></g>`,
		"fallback": "solar:file-badge-broken",
	});
}

export default Component;
