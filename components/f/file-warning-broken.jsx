import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b0v8xi1-v.css';
import '../../css/t/t_r3qbcnu.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/t/t4qaumccy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b0v8xi1-v"/><path class="t_r3qbcnu"/><path class="e0cmz0boh"/><path class="t4qaumccy"/></g>`,
		"fallback": "solar:file-warning-broken",
	});
}

export default Component;
