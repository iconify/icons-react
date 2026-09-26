import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i4bbelqdd.css';
import '../../css/u/udsce1b5r.css';
import '../../css/n/nqop7gbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i4bbelqdd"/><path class="udsce1b5r"/><path class="nqop7gbey"/></g>`,
		"fallback": "solar:chevron-last-broken",
	});
}

export default Component;
