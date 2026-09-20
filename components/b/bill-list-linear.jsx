import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tputa705v.css';
import '../../css/d/dlqxafwlz.css';
import '../../css/v/vtqv6bbgc.css';
import '../../css/k/k2s1bueve.css';
import '../../css/y/y5p8pgh1d.css';
import '../../css/r/r553e769v.css';
import '../../css/p/p8yhjpbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tputa705v"/><path class="dlqxafwlz"/><path class="vtqv6bbgc"/><path class="k2s1bueve"/><path class="y5p8pgh1d"/><path class="r553e769v"/><path class="p8yhjpbnq"/></g>`,
		"fallback": "solar:bill-list-linear",
	});
}

export default Component;
