import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dlqxafwlz.css';
import '../../css/v/vtqv6bbgc.css';
import '../../css/k/k2s1bueve.css';
import '../../css/y/y5p8pgh1d.css';
import '../../css/n/nszbcru_q.css';
import '../../css/a/auqpwjxps.css';
import '../../css/o/opk43_ukr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dlqxafwlz"/><path class="vtqv6bbgc"/><path class="k2s1bueve"/><path class="y5p8pgh1d"/><path class="nszbcru_q"/><path class="auqpwjxps"/><path class="opk43_ukr"/></g>`,
		"fallback": "solar:bill-list-broken",
	});
}

export default Component;
