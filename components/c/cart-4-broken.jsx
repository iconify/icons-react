import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k4m--obei.css';
import '../../css/x/xuvn6vbjj.css';
import '../../css/e/euua0jb3r.css';
import '../../css/p/pynb684jo.css';
import '../../css/t/txxo7ybhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k4m--obei"/><path class="xuvn6vbjj"/><path class="euua0jb3r"/><path class="pynb684jo"/><path class="txxo7ybhm"/></g>`,
		"fallback": "solar:cart-4-broken",
	});
}

export default Component;
