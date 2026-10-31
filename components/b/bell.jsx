import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rkrqwx5aj.css';
import '../../css/x/xznvoekor.css';
import '../../css/u/ussajy8ym.css';
import '../../css/u/utiq7_d6p.css';
import '../../css/r/riavolbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rkrqwx5aj wm-shadow"/><path class="xznvoekor"/><path class="ussajy8ym"/><path class="utiq7_d6p"/><path class="riavolbye"/></g>`,
		"fallback": "withicons-retro:bell",
	});
}

export default Component;
