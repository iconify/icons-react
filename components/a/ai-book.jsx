import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z27drdbsa.css';
import '../../css/c/c-tc9slrm.css';
import '../../css/u/u2q7dvd0o.css';
import '../../css/i/i_y-8r_ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z27drdbsa"/><path class="c-tc9slrm"/><path class="u2q7dvd0o"/><path class="i_y-8r_ol"/></g>`,
		"fallback": "hugeicons:ai-book",
	});
}

export default Component;
