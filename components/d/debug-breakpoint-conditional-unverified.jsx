import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wjqiubciq.css';
import '../../css/d/d3ei_ywlo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wjqiubciq"/><path class="d3ei_ywlo"/></g>`,
		"fallback": "codicon:debug-breakpoint-conditional-unverified",
	});
}

export default Component;
