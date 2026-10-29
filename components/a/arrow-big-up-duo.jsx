import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sp90bz0_h.css';
import '../../css/h/hv_jolb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sp90bz0_h"/><path class="hv_jolb_e"/></g>`,
		"fallback": "withicons:arrow-big-up-duo",
	});
}

export default Component;
