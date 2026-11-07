import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tb-reab7h.css';
import '../../css/t/taogqpb9g.css';
import '../../css/m/mm6j7bb6p.css';
import '../../css/n/noodpccbe.css';
import '../../css/y/y2cuq6b_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tb-reab7h"/><path class="taogqpb9g"/><path class="mm6j7bb6p"/><path class="noodpccbe"/><path class="y2cuq6b_i"/></g>`,
		"fallback": "solar:grid-2x2-close-broken",
	});
}

export default Component;
