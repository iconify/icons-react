import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7i_3xsnx.css';
import '../../css/m/m-4yxgj_d.css';
import '../../css/r/r_mm28b-k.css';
import '../../css/u/u6435db5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k7i_3xsnx"/><path class="m-4yxgj_d"/><path class="r_mm28b-k"/><circle class="u6435db5f"/></g>`,
		"fallback": "andrsrxn:inbox-notification",
	});
}

export default Component;
