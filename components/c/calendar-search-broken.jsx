import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cpbrkgbvb.css';
import '../../css/y/ytwl2ebtc.css';
import '../../css/r/rmwzjebkv.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/p/po0yeu5hs.css';
import '../../css/u/ue-h37-nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cpbrkgbvb"/><path class="ytwl2ebtc"/><path class="rmwzjebkv"/><circle class="ez1x61b2a"/><path class="po0yeu5hs"/><path class="ue-h37-nb"/></g>`,
		"fallback": "solar:calendar-search-broken",
	});
}

export default Component;
