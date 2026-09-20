import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i9a7o5iov.css';
import '../../css/j/jgun0ccrs.css';
import '../../css/y/ytwl2ebtc.css';
import '../../css/r/rmwzjebkv.css';
import '../../css/o/ou-u7bcws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i9a7o5iov"/><path class="jgun0ccrs"/><path class="ytwl2ebtc"/><path class="rmwzjebkv"/><path class="ou-u7bcws"/></g>`,
		"fallback": "solar:calendar-add-linear",
	});
}

export default Component;
