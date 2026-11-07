import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zxgfo-b_h.css';
import '../../css/d/dqoud86nz.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/e/ecerw2bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zxgfo-b_h"/><path class="dqoud86nz"/><path class="ktpncgb0v"/><path class="ecerw2bpo"/></g>`,
		"fallback": "solar:card-transfer-broken",
	});
}

export default Component;
