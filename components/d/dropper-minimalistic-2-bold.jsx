import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l3-t5pb7a.css';
import '../../css/p/pq1gpxbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l3-t5pb7a"/><path class="pq1gpxbwc"/></g>`,
		"fallback": "solar:dropper-minimalistic-2-bold",
	});
}

export default Component;
