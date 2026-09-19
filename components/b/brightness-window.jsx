import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/l4bl3-10q.css';
import '../../css/w/w1chdgabg.css';
import '../../css/m/mux62ac4r.css';
import '../../css/y/ypsi6lb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="l4bl3-10q"/><path class="w1chdgabg"/><path class="mux62ac4r"/><path class="ypsi6lb_h"/></g>`,
		"fallback": "iconoir:brightness-window",
	});
}

export default Component;
