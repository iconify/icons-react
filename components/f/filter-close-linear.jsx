import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6f2zid9g.css';
import '../../css/g/g3r_rtbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c6f2zid9g"/><path class="g3r_rtbqs"/></g>`,
		"fallback": "solar:filter-close-linear",
	});
}

export default Component;
