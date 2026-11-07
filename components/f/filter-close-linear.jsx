import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sgou4qb_v.css';
import '../../css/g/g3r_rtbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sgou4qb_v"/><path class="g3r_rtbqs"/></g>`,
		"fallback": "solar:filter-close-linear",
	});
}

export default Component;
