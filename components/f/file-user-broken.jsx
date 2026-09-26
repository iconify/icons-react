import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/t/tvwvv6hyt.css';
import '../../css/v/vve12wqxb.css';
import '../../css/t/t4qaumccy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0cmz0boh"/><circle class="tvwvv6hyt"/><path class="vve12wqxb"/><path class="t4qaumccy"/></g>`,
		"fallback": "solar:file-user-broken",
	});
}

export default Component;
