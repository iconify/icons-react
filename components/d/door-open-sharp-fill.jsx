import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pd-34o4hu.css';
import '../../css/p/pq_8milbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pd-34o4hu"/><path class="pq_8milbg"/></g>`,
		"fallback": "keyline-icons:door-open-sharp-fill",
	});
}

export default Component;
