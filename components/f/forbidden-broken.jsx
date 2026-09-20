import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o8j-s-bwz.css';
import '../../css/w/wihbiob8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o8j-s-bwz"/><path class="wihbiob8a"/></g>`,
		"fallback": "solar:forbidden-broken",
	});
}

export default Component;
