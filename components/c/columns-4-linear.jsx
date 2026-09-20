import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ojv2i-bxi.css';
import '../../css/e/eyrtj4wgt.css';
import '../../css/f/f_1b_5fjb.css';
import '../../css/r/rma5_ql1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ojv2i-bxi"/><path class="eyrtj4wgt"/><path class="f_1b_5fjb"/><path class="rma5_ql1e"/></g>`,
		"fallback": "solar:columns-4-linear",
	});
}

export default Component;
