import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zt6-z9xfb.css';
import '../../css/y/yb_t6x67u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zt6-z9xfb"/><path class="yb_t6x67u"/></g>`,
		"fallback": "hugeicons:flip-vertical",
	});
}

export default Component;
