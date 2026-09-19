import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p8noaabtb.css';
import '../../css/x/xfkr8aboy.css';
import '../../css/m/m247a-91k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p8noaabtb"/><path class="xfkr8aboy"/><path class="m247a-91k"/></g>`,
		"fallback": "hugeicons:dress-07",
	});
}

export default Component;
