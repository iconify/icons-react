import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i4anzi58i.css';
import '../../css/q/qo_q4hblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i4anzi58i"/><path class="qo_q4hblb"/></g>`,
		"fallback": "solar:chevron-first-linear",
	});
}

export default Component;
