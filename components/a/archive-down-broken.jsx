import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m97iezbay.css';
import '../../css/m/mjojrgq4j.css';
import '../../css/d/dujh-y52z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m97iezbay"/><path class="mjojrgq4j"/><path class="dujh-y52z"/></g>`,
		"fallback": "solar:archive-down-broken",
	});
}

export default Component;
