import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t7n_a516v.css';
import '../../css/r/rwyyhnb2f.css';
import '../../css/q/qgl0b2pvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t7n_a516v"/><path class="rwyyhnb2f"/><path class="qgl0b2pvl"/></g>`,
		"fallback": "solar:hand-shake-linear",
	});
}

export default Component;
