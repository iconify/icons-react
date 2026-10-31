import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zmygrub0v.css';
import '../../css/y/ym65zmakm.css';
import '../../css/y/yhowb_b2r.css';
import '../../css/m/m1ygqmchb.css';
import '../../css/q/qo8z4vb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow zmygrub0v"/><path class="wm-shadow ym65zmakm"/><path class="yhowb_b2r"/><path class="m1ygqmchb"/><path class="qo8z4vb6c wm-s"/></g>`,
		"fallback": "withicons-brutal:heading-1",
	});
}

export default Component;
