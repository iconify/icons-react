import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i9s-s9bxy.css';
import '../../css/t/tyv_n2b2v.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/i/ic-2n6n4h.css';
import '../../css/e/ecerw2bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i9s-s9bxy"/><path class="tyv_n2b2v"/><path class="ktpncgb0v"/><path class="ic-2n6n4h"/><path class="ecerw2bpo"/></g>`,
		"fallback": "solar:card-send-broken",
	});
}

export default Component;
