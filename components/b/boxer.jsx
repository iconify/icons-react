import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lsdx72hdd.css';
import '../../css/p/po7_ugb8x.css';
import '../../css/e/ehvyd8b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lsdx72hdd"/><path class="po7_ugb8x"/><path class="ehvyd8b2z"/></g>`,
		"fallback": "hugeicons:boxer",
	});
}

export default Component;
