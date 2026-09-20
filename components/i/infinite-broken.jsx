import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yygr_ccfm.css';
import '../../css/n/ntftecckr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yygr_ccfm"/><path class="ntftecckr"/></g>`,
		"fallback": "solar:infinite-broken",
	});
}

export default Component;
