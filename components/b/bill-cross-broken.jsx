import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zvakluojt.css';
import '../../css/b/bptzo87jl.css';
import '../../css/o/opk43_ukr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zvakluojt"/><path class="bptzo87jl"/><path class="opk43_ukr"/></g>`,
		"fallback": "solar:bill-cross-broken",
	});
}

export default Component;
