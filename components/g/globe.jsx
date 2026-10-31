import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/s/swq35w85q.css';
import '../../css/y/yv5hpeb2i.css';
import '../../css/r/re8x6iflq.css';
import '../../css/m/mz2q7_ypn.css';
import '../../css/r/rotm-ibzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="swq35w85q"/><path class="yv5hpeb2i"/><path class="re8x6iflq"/><path class="mz2q7_ypn"/><path class="rotm-ibzy"/></g>`,
		"fallback": "withicons-retro:globe",
	});
}

export default Component;
