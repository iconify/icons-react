import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u78lc2bnx.css';
import '../../css/y/ylzw20bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u78lc2bnx"/><path class="ylzw20bbz"/></g>`,
		"fallback": "hugeicons:arrow-down-03",
	});
}

export default Component;
