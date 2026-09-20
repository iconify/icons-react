import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wozosfbjj.css';
import '../../css/s/sr5bgubyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wozosfbjj"/><path class="sr5bgubyr"/></g>`,
		"fallback": "solar:bag-broken",
	});
}

export default Component;
