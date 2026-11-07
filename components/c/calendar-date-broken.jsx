import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ytwl2ebtc.css';
import '../../css/r/rmwzjebkv.css';
import '../../css/d/djtt46btr.css';
import '../../css/u/u7zw42bna.css';
import '../../css/n/ncr8prb0x.css';
import '../../css/t/tv6qiybum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ytwl2ebtc"/><path class="rmwzjebkv"/><path class="djtt46btr"/><path class="u7zw42bna"/><path class="ncr8prb0x"/><path class="tv6qiybum"/></g>`,
		"fallback": "solar:calendar-date-broken",
	});
}

export default Component;
