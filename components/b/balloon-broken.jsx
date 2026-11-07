import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hioldmbfk.css';
import '../../css/d/d0k502nsw.css';
import '../../css/e/efb3h0bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hioldmbfk"/><path class="d0k502nsw"/><path class="efb3h0bra"/></g>`,
		"fallback": "solar:balloon-broken",
	});
}

export default Component;
