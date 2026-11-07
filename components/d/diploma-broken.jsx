import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khepvrb6r.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/e/ep2vvy3hy.css';
import '../../css/e/exgld-b-f.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/j/j6p0y4-0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="khepvrb6r"/><path class="n1_ykhn3f"/><path class="ep2vvy3hy"/><path class="exgld-b-f"/><circle class="v3g6xoxym"/><path class="j6p0y4-0y"/></g>`,
		"fallback": "solar:diploma-broken",
	});
}

export default Component;
