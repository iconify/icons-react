import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fhooj7b6h.css';
import '../../css/b/bk6h2k88e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fhooj7b6h"/><path class="bk6h2k88e"/></g>`,
		"fallback": "hugeicons:golf-hole",
	});
}

export default Component;
