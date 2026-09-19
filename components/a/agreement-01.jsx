import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dw7na028t.css';
import '../../css/u/u7x3rx2ae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dw7na028t"/><path class="u7x3rx2ae"/></g>`,
		"fallback": "hugeicons:agreement-01",
	});
}

export default Component;
