import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i78bhubvt.css';
import '../../css/l/lc-1m4bvp.css';
import '../../css/e/e78qg7bkf.css';
import '../../css/k/kros7mbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i78bhubvt"/><path class="lc-1m4bvp"/><path class="e78qg7bkf"/><path class="kros7mbvb"/></g>`,
		"fallback": "solar:cloudy-moon-broken",
	});
}

export default Component;
