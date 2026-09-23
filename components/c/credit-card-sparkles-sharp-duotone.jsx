import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/enjc3_bdq.css';
import '../../css/m/mjt0l_brl.css';
import '../../css/f/fq5xfrb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="enjc3_bdq"/><path class="mjt0l_brl"/><path class="fq5xfrb-c"/></g>`,
		"fallback": "keyline-icons:credit-card-sparkles-sharp-duotone",
	});
}

export default Component;
