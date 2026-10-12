import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snwffkb-o.css';
import '../../css/l/lqofgujgs.css';
import '../../css/r/rtszrhbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="snwffkb-o"/><path class="lqofgujgs"/><path class="rtszrhbci"/></g>`,
		"fallback": "andrsrxn:heart-pulse",
	});
}

export default Component;
