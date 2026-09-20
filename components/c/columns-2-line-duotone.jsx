import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lia6c03rv.css';
import '../../css/r/rma5_ql1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lia6c03rv"/><path class="rma5_ql1e"/></g>`,
		"fallback": "solar:columns-2-line-duotone",
	});
}

export default Component;
