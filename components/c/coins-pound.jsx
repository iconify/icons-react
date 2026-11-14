import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ug58xnt6m.css';
import '../../css/f/fb6z9-nva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ug58xnt6m"/><path class="fb6z9-nva"/></g>`,
		"fallback": "hugeicons:coins-pound",
	});
}

export default Component;
