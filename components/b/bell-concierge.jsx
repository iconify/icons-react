import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qds7mmgln.css';
import '../../css/u/u2_wjkb4f.css';
import '../../css/q/qew44nber.css';
import '../../css/k/kp4u9nbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qds7mmgln wm-shadow"/><path class="u2_wjkb4f wm-shadow"/><path class="qew44nber"/><path class="kp4u9nbgh"/></g>`,
		"fallback": "withicons-brutal:bell-concierge",
	});
}

export default Component;
