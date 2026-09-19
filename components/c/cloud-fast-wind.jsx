import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iqlpjlzqa.css';
import '../../css/d/dl-3pac2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iqlpjlzqa"/><path class="dl-3pac2b"/></g>`,
		"fallback": "hugeicons:cloud-fast-wind",
	});
}

export default Component;
