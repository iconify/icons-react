import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ncp7bccaf.css';
import '../../css/c/cx0dbdbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ncp7bccaf"/><path clip-rule="evenodd" class="cx0dbdbaq"/></g>`,
		"fallback": "healthicons:bacteria-outline-24px",
	});
}

export default Component;
