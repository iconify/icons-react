import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/r/rrxs73kzb.css';
import '../../css/a/apf_lpbdo.css';
import '../../css/a/azaw88ucy.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/x/xfncq-o6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="rrxs73kzb wm-a"/><path class="apf_lpbdo wm-a"/><path class="azaw88ucy"/><path class="d3y9mw6db"/><path class="wm-a xfncq-o6e"/></g>`,
		"fallback": "withicons:avatar-man-afro-duo",
	});
}

export default Component;
