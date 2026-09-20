import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i9a7o5iov.css';
import '../../css/y/ytwl2ebtc.css';
import '../../css/r/rmwzjebkv.css';
import '../../css/d/djtt46btr.css';
import '../../css/p/p_9-p8r6d.css';
import '../../css/o/ou-u7bcws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i9a7o5iov"/><path class="ytwl2ebtc"/><path class="rmwzjebkv"/><path class="djtt46btr"/><path class="p_9-p8r6d"/><path class="ou-u7bcws"/></g>`,
		"fallback": "solar:calendar-date-linear",
	});
}

export default Component;
