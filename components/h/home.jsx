import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jf8khup_j.css';
import '../../css/u/u-f7kmb9y.css';
import '../../css/b/bonpz1pyo.css';
import '../../css/a/ajj5sjwko.css';
import '../../css/g/gmt4yrbnc.css';
import '../../css/o/oqg3oivvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jf8khup_j wm-shadow"/><path class="u-f7kmb9y"/><path class="bonpz1pyo"/><path class="ajj5sjwko"/><path class="gmt4yrbnc"/><path class="oqg3oivvy"/></g>`,
		"fallback": "withicons-retro:home",
	});
}

export default Component;
