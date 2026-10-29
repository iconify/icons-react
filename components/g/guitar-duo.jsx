import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vrr1sqbbb.css';
import '../../css/p/p_xj8acnx.css';
import '../../css/h/hdm5_-v4o.css';
import '../../css/k/knf-w_g_n.css';
import '../../css/l/l6x9gjbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vrr1sqbbb"/><path class="p_xj8acnx wm-a"/><path class="hdm5_-v4o wm-a"/><path class="knf-w_g_n"/><path class="l6x9gjbcy wm-a"/></g>`,
		"fallback": "withicons:guitar-duo",
	});
}

export default Component;
