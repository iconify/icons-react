import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/taogqpb9g.css';
import '../../css/t/tase98tfq.css';
import '../../css/f/frr67dw0i.css';
import '../../css/p/pob85mb3x.css';
import '../../css/a/avdzeya6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="taogqpb9g"/><path class="tase98tfq"/><path class="frr67dw0i"/><path class="pob85mb3x"/><path class="avdzeya6q"/></g>`,
		"fallback": "solar:grid-2x2-check-broken",
	});
}

export default Component;
