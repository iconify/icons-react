import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tgtr_43fx.css';
import '../../css/i/izhbk9bxm.css';
import '../../css/z/zn_lb-99n.css';
import '../../css/m/m5xrzdgdg.css';
import '../../css/l/l52ld5bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tgtr_43fx"/><path class="izhbk9bxm"/><path class="zn_lb-99n"/><path class="m5xrzdgdg"/><path class="l52ld5bni"/></g>`,
		"fallback": "solar:cart-large-4-linear",
	});
}

export default Component;
