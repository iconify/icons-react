import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o-s0krxnl.css';
import '../../css/p/py99o21wd.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/x/xtwt0b8mq.css';
import '../../css/e/emxy-vbfp.css';
import '../../css/n/nttuc_cwh.css';
import '../../css/l/lqf4hhbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o-s0krxnl"/><path class="py99o21wd"/><path class="hq-5njbjh"/><path class="xtwt0b8mq"/><path class="emxy-vbfp"/><path class="nttuc_cwh"/><path class="lqf4hhbzi"/></g>`,
		"fallback": "solar:boombox-broken",
	});
}

export default Component;
