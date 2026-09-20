import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dfqhfq-4w.css';
import '../../css/s/sxr9t17bs.css';
import '../../css/i/i-b1b9mbj.css';
import '../../css/m/mssc0fbma.css';
import '../../css/e/e8q-s-qwm.css';
import '../../css/o/o785odbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dfqhfq-4w"/><path class="sxr9t17bs"/><path class="i-b1b9mbj"/><path class="mssc0fbma"/><path class="e8q-s-qwm"/><path class="o785odbyr"/></g>`,
		"fallback": "solar:cash-out-broken",
	});
}

export default Component;
