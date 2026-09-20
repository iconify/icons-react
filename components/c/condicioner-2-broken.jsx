import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vy28cyx9v.css';
import '../../css/s/st1-3c4aa.css';
import '../../css/e/e2b3azt4u.css';
import '../../css/x/xuip9tb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vy28cyx9v"/><path class="st1-3c4aa"/><path class="e2b3azt4u"/><path class="xuip9tb1s"/></g>`,
		"fallback": "solar:condicioner-2-broken",
	});
}

export default Component;
