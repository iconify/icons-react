import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1pz58blc.css';
import '../../css/p/p7a2b8b9r.css';
import '../../css/s/srygt-0la.css';
import '../../css/y/yp54sytzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1pz58blc"/><path class="p7a2b8b9r"/><path class="srygt-0la"/><path class="yp54sytzi"/></g>`,
		"fallback": "solar:confounded-circle-bold-duotone",
	});
}

export default Component;
