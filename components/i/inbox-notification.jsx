import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ai90pfest.css';
import '../../css/y/y93_8vu0i.css';
import '../../css/r/r_mm28b-k.css';
import '../../css/u/utdtel6be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ai90pfest"/><path class="y93_8vu0i"/><path class="r_mm28b-k"/><circle class="utdtel6be"/></g>`,
		"fallback": "andrsrxn:inbox-notification",
	});
}

export default Component;
