import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yg-b6448d.css';
import '../../css/j/jkoiwub4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yg-b6448d"/><path class="jkoiwub4z"/></g>`,
		"fallback": "hugeicons:call-disabled",
	});
}

export default Component;
