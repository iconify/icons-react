import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kf2oy6bza.css';
import '../../css/j/jx8ve--2z.css';
import '../../css/h/h5wtxfm1n.css';
import '../../css/m/m-_pys7sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kf2oy6bza"/><path class="jx8ve--2z"/><path class="h5wtxfm1n"/><path clip-rule="evenodd" class="m-_pys7sn"/></g>`,
		"fallback": "solar:file-chart-2-outline",
	});
}

export default Component;
