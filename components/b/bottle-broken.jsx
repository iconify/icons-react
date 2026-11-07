import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kzy9852gd.css';
import '../../css/d/d9nm02b3e.css';
import '../../css/e/eh6roob1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kzy9852gd"/><path class="d9nm02b3e"/><path class="eh6roob1y"/></g>`,
		"fallback": "solar:bottle-broken",
	});
}

export default Component;
