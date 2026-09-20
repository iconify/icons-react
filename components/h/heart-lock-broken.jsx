import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u0ck9yb3g.css';
import '../../css/u/un29iqbuk.css';
import '../../css/f/fuprorb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u0ck9yb3g"/><path class="un29iqbuk"/><path class="fuprorb1g"/></g>`,
		"fallback": "solar:heart-lock-broken",
	});
}

export default Component;
