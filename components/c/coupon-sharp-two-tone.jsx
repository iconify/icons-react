import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/boqwajrpv.css';
import '../../css/w/wui7kdbtk.css';
import '../../css/x/x89uejb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="boqwajrpv"/><path class="wui7kdbtk"/><path class="x89uejb-e"/></g>`,
		"fallback": "keyline-icons:coupon-sharp-two-tone",
	});
}

export default Component;
