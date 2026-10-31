import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y-a8ssohu.css';
import '../../css/q/q7neo10ld.css';
import '../../css/p/pnt-r2bvl.css';
import '../../css/m/m44piaclc.css';
import '../../css/i/ivq625pkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow y-a8ssohu"/><path class="q7neo10ld wm-shadow"/><path class="pnt-r2bvl"/><path class="m44piaclc"/><path class="ivq625pkq wm-s"/></g>`,
		"fallback": "withicons-brutal:avatar-alien",
	});
}

export default Component;
