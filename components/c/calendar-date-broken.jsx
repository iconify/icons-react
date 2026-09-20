import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ytwl2ebtc.css';
import '../../css/r/rmwzjebkv.css';
import '../../css/d/djtt46btr.css';
import '../../css/p/p_9-p8r6d.css';
import '../../css/u/ue-h37-nb.css';
import '../../css/t/tv6qiybum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ytwl2ebtc"/><path class="rmwzjebkv"/><path class="djtt46btr"/><path class="p_9-p8r6d"/><path class="ue-h37-nb"/><path class="tv6qiybum"/></g>`,
		"fallback": "solar:calendar-date-broken",
	});
}

export default Component;
