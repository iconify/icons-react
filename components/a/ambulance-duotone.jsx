import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xt4bdptou.css';
import '../../css/j/j-na3ub7o.css';
import '../../css/h/hc_zcwc_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xt4bdptou"/><path class="j-na3ub7o"/><path class="hc_zcwc_j"/></g>`,
		"fallback": "lucide-extended:ambulance-duotone",
	});
}

export default Component;
