import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v-georbdi.css';
import '../../css/j/jjt8zj_pn.css';
import '../../css/w/w6_0i26ca.css';
import '../../css/r/r726_cbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v-georbdi"/><path class="jjt8zj_pn"/><path class="w6_0i26ca"/><path class="r726_cbpq"/></g>`,
		"fallback": "hugeicons:hamburger-01",
	});
}

export default Component;
