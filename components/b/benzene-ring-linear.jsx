import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k7vqiwbtv.css';
import '../../css/f/f5r1qi0_e.css';
import '../../css/t/tb3176osp.css';
import '../../css/x/xk1n0w2qu.css';
import '../../css/t/tz1agk9et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k7vqiwbtv"/><path class="f5r1qi0_e"/><path class="tb3176osp"/><path class="xk1n0w2qu"/><path class="tz1agk9et"/></g>`,
		"fallback": "solar:benzene-ring-linear",
	});
}

export default Component;
