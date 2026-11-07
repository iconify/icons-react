import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f5hn4upfu.css';
import '../../css/n/nkncs4b1r.css';
import '../../css/o/ollsq1blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f5hn4upfu"/><path class="nkncs4b1r"/><path class="ollsq1blz"/></g>`,
		"fallback": "solar:bookmark-opened-broken",
	});
}

export default Component;
