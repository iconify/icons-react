import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r247vsbdl.css';
import '../../css/n/nkncs4b1r.css';
import '../../css/n/na9l3_b7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r247vsbdl"/><path class="nkncs4b1r"/><path class="na9l3_b7s"/></g>`,
		"fallback": "solar:bookmark-opened-broken",
	});
}

export default Component;
