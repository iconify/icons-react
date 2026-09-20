import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qjva00luf.css';
import '../../css/a/akmtuqbnt.css';
import '../../css/f/f39he8onf.css';
import '../../css/k/knpnsdbbr.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/p/po0yeu5hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qjva00luf"/><path class="akmtuqbnt"/><path class="f39he8onf"/><path class="knpnsdbbr"/><circle class="ez1x61b2a"/><path class="po0yeu5hs"/></g>`,
		"fallback": "solar:calendar-search-line-duotone",
	});
}

export default Component;
