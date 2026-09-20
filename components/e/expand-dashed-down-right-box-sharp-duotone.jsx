import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h0_549rrx.css';
import '../../css/x/xap4lcbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="h0_549rrx"/><path class="xap4lcbam"/></g>`,
		"fallback": "keyline-icons:expand-dashed-down-right-box-sharp-duotone",
	});
}

export default Component;
