import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e5sx4mbfr.css';
import '../../css/w/wl_e0fb9e.css';
import '../../css/e/ewavw_btk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e5sx4mbfr"/><path class="wl_e0fb9e"/><path class="ewavw_btk"/></g>`,
		"fallback": "hugeicons:comment-add-01",
	});
}

export default Component;
