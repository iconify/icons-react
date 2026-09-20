import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxgwu1uly.css';
import '../../css/r/rojm0ya3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bxgwu1uly"/><path class="rojm0ya3p"/></g>`,
		"fallback": "solar:folder-dot-outline",
	});
}

export default Component;
