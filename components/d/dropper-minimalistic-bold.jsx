import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zty0h4bni.css';
import '../../css/p/pq1gpxbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zty0h4bni"/><path class="pq1gpxbwc"/></g>`,
		"fallback": "solar:dropper-minimalistic-bold",
	});
}

export default Component;
