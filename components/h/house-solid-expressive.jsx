import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wr77yibbz.css';
import '../../css/v/v5zynjfyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wr77yibbz"/><path class="v5zynjfyu"/></g>`,
		"fallback": "nrk:house-solid-expressive",
	});
}

export default Component;
