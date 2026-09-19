import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hug2-ls7e.css';
import '../../css/l/lk9549bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hug2-ls7e"/><path class="lk9549bxy"/></g>`,
		"fallback": "hugeicons:flag-03",
	});
}

export default Component;
