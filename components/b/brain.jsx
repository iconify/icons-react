import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkgimhbck.css';
import '../../css/j/jm0k81bwl.css';
import '../../css/u/uh4bdsl5u.css';
import '../../css/t/tfvne12xf.css';
import '../../css/h/h7nek_jpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkgimhbck wm-k"/><path class="jm0k81bwl wm-k"/><path class="uh4bdsl5u wm-k"/><path class="tfvne12xf wm-shine"/><path class="h7nek_jpd wm-a"/></g>`,
		"fallback": "withicons-anime:brain",
	});
}

export default Component;
