import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/txxo7ybhm.css';
import '../../css/k/ke3a2_b3b.css';
import '../../css/s/s5yx09_gc.css';
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
		"content": `<g class="ipq1z-bjh"><path class="txxo7ybhm"/><path class="ke3a2_b3b"/><path class="s5yx09_gc"/><path class="euua0jb3r"/><path class="pynb684jo"/></g>`,
		"fallback": "solar:cart-5-broken",
	});
}

export default Component;
