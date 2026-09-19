import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ii_ihl0hs.css';
import '../../css/j/j1ywxabdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ii_ihl0hs"/><path class="j1ywxabdn"/></g>`,
		"fallback": "hugeicons:fast-wind",
	});
}

export default Component;
