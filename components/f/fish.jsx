import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hcnp8dbwm.css';
import '../../css/n/n4ookfbhc.css';
import '../../css/f/f_kx4bq1y.css';
import '../../css/e/e6m6j5bxv.css';
import '../../css/a/a88wm0nfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hcnp8dbwm wm-shadow"/><path class="n4ookfbhc"/><path class="f_kx4bq1y"/><path class="e6m6j5bxv"/><path class="a88wm0nfl"/></g>`,
		"fallback": "withicons-retro:fish",
	});
}

export default Component;
