import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/brgx0gbyk.css';
import '../../css/f/fuprorb1g.css';
import '../../css/u/u0ck9yb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="brgx0gbyk"/><path class="fuprorb1g"/><path class="u0ck9yb3g"/></g>`,
		"fallback": "solar:heart-unlock-broken",
	});
}

export default Component;
