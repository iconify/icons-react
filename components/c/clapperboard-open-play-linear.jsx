import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6fn0fb1j.css';
import '../../css/h/htd9n0b_o.css';
import '../../css/q/qgxak08we.css';
import '../../css/e/ezgo-k8an.css';
import '../../css/m/m5-wz0b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l6fn0fb1j"/><path class="htd9n0b_o"/><path class="qgxak08we"/><path class="ezgo-k8an"/><path class="m5-wz0b2q"/></g>`,
		"fallback": "solar:clapperboard-open-play-linear",
	});
}

export default Component;
