import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uluj0_ceb.css';
import '../../css/r/r447x5bkm.css';
import '../../css/h/htmq9rb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uluj0_ceb"/><path class="r447x5bkm"/><path class="htmq9rb4r"/></g>`,
		"fallback": "reicon:cpu-setting-filled",
	});
}

export default Component;
