import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/knf-w_g_n.css';
import '../../css/c/c96fvtbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="knf-w_g_n"/><path class="c96fvtbfs wm-a"/></g>`,
		"fallback": "withicons:guitar",
	});
}

export default Component;
