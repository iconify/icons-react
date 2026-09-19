import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xved4f9hb.css';
import '../../css/f/f2afytbsi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xved4f9hb"/><path class="f2afytbsi"/></g>`,
		"fallback": "bi:bootstrap-fill",
	});
}

export default Component;
