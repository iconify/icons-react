import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f9kkz6r8k.css';
import '../../css/x/x6_572bcm.css';
import '../../css/v/v2j04pb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f9kkz6r8k"/><path class="x6_572bcm"/><path class="v2j04pb6g"/></g>`,
		"fallback": "hugeicons:chair-04",
	});
}

export default Component;
