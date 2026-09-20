import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bspj2u0td.css';
import '../../css/d/d71qpwbzn.css';
import '../../css/x/xuvn6vbjj.css';
import '../../css/e/euua0jb3r.css';
import '../../css/p/pynb684jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bspj2u0td"/><path class="d71qpwbzn"/><path class="xuvn6vbjj"/><path class="euua0jb3r"/><path class="pynb684jo"/></g>`,
		"fallback": "solar:cart-4-linear",
	});
}

export default Component;
