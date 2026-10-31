import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jffv05erc.css';
import '../../css/y/yxy2atbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jffv05erc"/><path class="yxy2atbbg"/></g>`,
		"fallback": "withicons-retro:chart-spline",
	});
}

export default Component;
