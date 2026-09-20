import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sqget_biz.css';
import '../../css/e/eb3r95ldj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sqget_biz"/><path class="eb3r95ldj"/></g>`,
		"fallback": "majesticons:chevron-double-right-line",
	});
}

export default Component;
