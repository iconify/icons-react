import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tfs-l-vfz.css';
import '../../css/q/q9vwbdbmq.css';
import '../../css/l/lp_m7xb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tfs-l-vfz"/><path class="q9vwbdbmq"/><path class="lp_m7xb0u"/></g>`,
		"fallback": "iconaut:arrow-up-left-down-right-duo",
	});
}

export default Component;
