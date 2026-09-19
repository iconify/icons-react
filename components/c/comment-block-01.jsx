import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wl_e0fb9e.css';
import '../../css/e/ewavw_btk.css';
import '../../css/w/whmo1zb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wl_e0fb9e"/><path class="ewavw_btk"/><path class="whmo1zb_n"/></g>`,
		"fallback": "hugeicons:comment-block-01",
	});
}

export default Component;
