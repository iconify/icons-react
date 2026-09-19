import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u0xku0bgd.css';
import '../../css/t/tdxooab0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u0xku0bgd"/><path class="tdxooab0w"/></g>`,
		"fallback": "hugeicons:broccoli",
	});
}

export default Component;
