import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t6qgw5b9f.css';
import '../../css/m/m97iezbay.css';
import '../../css/m/mjojrgq4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t6qgw5b9f"/><path class="m97iezbay"/><path class="mjojrgq4j"/></g>`,
		"fallback": "solar:archive-close-broken",
	});
}

export default Component;
