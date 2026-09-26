import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwl294-jd.css';
import '../../css/n/nu5oy7wvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vwl294-jd"/><path class="nu5oy7wvn"/></g>`,
		"fallback": "solar:chevron-last-outline",
	});
}

export default Component;
