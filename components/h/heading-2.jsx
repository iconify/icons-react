import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qmykw592j.css';
import '../../css/w/wkab_zovm.css';
import '../../css/y/yn_m8clgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qmykw592j"/><path class="wkab_zovm"/><path class="wm-s yn_m8clgw"/></g>`,
		"fallback": "withicons-retro:heading-2",
	});
}

export default Component;
