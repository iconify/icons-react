import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/taogqpb9g.css';
import '../../css/m/mm6j7bb6p.css';
import '../../css/n/noodpccbe.css';
import '../../css/y/y2cuq6b_i.css';
import '../../css/c/c8yuot4zz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="taogqpb9g"/><path class="mm6j7bb6p"/><path class="noodpccbe"/><path class="y2cuq6b_i"/><path class="c8yuot4zz"/></g>`,
		"fallback": "solar:grid-2x2-add-broken",
	});
}

export default Component;
