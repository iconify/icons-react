import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/w/we8c1sbpi.css';
import '../../css/q/qa8_2g2qw.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/q/qk844vlin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="we8c1sbpi wm-a"/><path class="qa8_2g2qw wm-a"/><path class="f2iz_pbwp"/><path class="qk844vlin wm-a"/></g>`,
		"fallback": "withicons:avatar-man-beard-duo",
	});
}

export default Component;
