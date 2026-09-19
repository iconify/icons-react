import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n72owewuq.css';
import '../../css/x/x733nsfgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n72owewuq"/><path class="x733nsfgz"/></g>`,
		"fallback": "hugeicons:cashback",
	});
}

export default Component;
