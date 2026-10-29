import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/drfrgy0_d.css';
import '../../css/l/lw875-p4x.css';
import '../../css/y/yohw-bcjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="drfrgy0_d"/><path class="lw875-p4x"/><path class="wm-a yohw-bcjc"/></g>`,
		"fallback": "withicons:download-duo",
	});
}

export default Component;
