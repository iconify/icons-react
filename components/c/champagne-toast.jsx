import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g5elzr5sg.css';
import '../../css/j/j3tezwbfc.css';
import '../../css/w/wlf0a6brv.css';
import '../../css/n/nimmn4l2d.css';
import '../../css/u/upahi3bdj.css';
import '../../css/a/a1nakg1pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g5elzr5sg wm-k"/><path class="j3tezwbfc wm-s"/><path class="wlf0a6brv wm-k"/><path class="nimmn4l2d wm-k"/><path class="upahi3bdj wm-s"/><path class="a1nakg1pz wm-shadow"/></g>`,
		"fallback": "withicons-valentine:champagne-toast",
	});
}

export default Component;
