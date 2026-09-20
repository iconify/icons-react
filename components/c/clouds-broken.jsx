import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t5j1vm67z.css';
import '../../css/t/th4vp6ksk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t5j1vm67z"/><path class="th4vp6ksk"/></g>`,
		"fallback": "solar:clouds-broken",
	});
}

export default Component;
