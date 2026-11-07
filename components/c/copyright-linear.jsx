import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w3r9-bcte.css';
import '../../css/r/r-ahhgx6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w3r9-bcte"/><path class="r-ahhgx6h"/></g>`,
		"fallback": "solar:copyright-linear",
	});
}

export default Component;
