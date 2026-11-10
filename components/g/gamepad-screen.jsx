import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tux9qibeh.css';
import '../../css/w/w4kybtbut.css';
import '../../css/i/ijf-f2b6s.css';
import '../../css/q/q07m0d0vz.css';
import '../../css/n/npnp_ub8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tux9qibeh"/><path class="w4kybtbut"/><path class="ijf-f2b6s"/><path class="q07m0d0vz"/><path class="npnp_ub8q"/></g>`,
		"fallback": "andrsrxn:gamepad-screen",
	});
}

export default Component;
