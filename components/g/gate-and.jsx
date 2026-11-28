import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p_eg_1bvq.css';
import '../../css/m/mnd_fvgsb.css';
import '../../css/i/ikd6lokut.css';
import '../../css/x/xc1ugqj_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p_eg_1bvq"/><path class="mnd_fvgsb"/><path class="ikd6lokut"/><path class="xc1ugqj_g"/></g>`,
		"fallback": "iconaut:gate-and",
	});
}

export default Component;
