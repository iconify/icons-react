import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/urxsatbin.css';
import '../../css/p/p-i671bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="urxsatbin"/><path class="p-i671bnh"/></g>`,
		"fallback": "hugeicons:clover",
	});
}

export default Component;
