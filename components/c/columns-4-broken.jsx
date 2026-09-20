import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eyrtj4wgt.css';
import '../../css/f/f_1b_5fjb.css';
import '../../css/m/ml0cb1b5h.css';
import '../../css/o/o41814ltx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eyrtj4wgt"/><path class="f_1b_5fjb"/><path class="ml0cb1b5h"/><path class="o41814ltx"/></g>`,
		"fallback": "solar:columns-4-broken",
	});
}

export default Component;
