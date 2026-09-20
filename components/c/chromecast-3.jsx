import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svtuu7o8s.css';
import '../../css/k/k_rrd8b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="svtuu7o8s"/><path class="k_rrd8b4d"/></g>`,
		"fallback": "nrk:chromecast-3",
	});
}

export default Component;
