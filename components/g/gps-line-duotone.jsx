import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xtx0s6u8w.css';
import '../../css/z/zleje_bse.css';
import '../../css/h/hv3siab8m.css';
import '../../css/j/jft98ub-s.css';
import '../../css/e/e34edehjy.css';
import '../../css/c/cax_t5mes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xtx0s6u8w"/><path class="zleje_bse"/><path class="hv3siab8m"/><path class="jft98ub-s"/><path class="e34edehjy"/><path class="cax_t5mes"/></g>`,
		"fallback": "solar:gps-line-duotone",
	});
}

export default Component;
