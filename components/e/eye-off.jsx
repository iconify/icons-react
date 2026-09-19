import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c3cw44yrk.css';
import '../../css/r/rpe_r-bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c3cw44yrk"/><path class="rpe_r-bbh"/></g>`,
		"fallback": "iconoir:eye-off",
	});
}

export default Component;
