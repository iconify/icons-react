import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pz1slbcbq.css';
import '../../css/u/u154v_8wc.css';
import '../../css/x/xv6r26bwy.css';
import '../../css/d/d07orurwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pz1slbcbq"/><path class="u154v_8wc"/><path class="xv6r26bwy"/><path class="d07orurwf"/></g>`,
		"fallback": "solar:broom-broken",
	});
}

export default Component;
