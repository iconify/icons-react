import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yf7o7pb_p.css';
import '../../css/w/wjcm_kp5a.css';
import '../../css/e/ekmlpmtjg.css';
import '../../css/l/lvwj8zv0y.css';
import '../../css/d/d-c_quigx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yf7o7pb_p"/><path class="wjcm_kp5a wm-s"/><path class="ekmlpmtjg wm-s"/><path class="lvwj8zv0y"/><path class="d-c_quigx wm-a"/></g>`,
		"fallback": "withicons:brain-cog-duo",
	});
}

export default Component;
