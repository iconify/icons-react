import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/q/q-by_gwfk.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/p/pz2j55bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="q-by_gwfk wm-a"/><path class="f2iz_pbwp"/><path class="d3y9mw6db"/><path class="pz2j55bku wm-a"/></g>`,
		"fallback": "withicons:avatar-man-duo",
	});
}

export default Component;
