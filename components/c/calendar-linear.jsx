import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i9a7o5iov.css';
import '../../css/y/ytwl2ebtc.css';
import '../../css/r/rmwzjebkv.css';
import '../../css/o/ou-u7bcws.css';
import '../../css/s/s-k_z47ah.css';
import '../../css/x/x4qttyz6i.css';
import '../../css/o/ox982rbym.css';
import '../../css/z/zihrmabze.css';
import '../../css/t/tvuddlb5o.css';
import '../../css/c/clqtkrb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i9a7o5iov"/><path class="ytwl2ebtc"/><path class="rmwzjebkv"/><path class="ou-u7bcws"/><path class="s-k_z47ah"/><path class="x4qttyz6i"/><path class="ox982rbym"/><path class="zihrmabze"/><path class="tvuddlb5o"/><path class="clqtkrb8d"/></g>`,
		"fallback": "solar:calendar-linear",
	});
}

export default Component;
