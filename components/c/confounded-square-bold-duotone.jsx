import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuose96rb.css';
import '../../css/a/a1pz58blc.css';
import '../../css/p/p7a2b8b9r.css';
import '../../css/s/srygt-0la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuose96rb"/><path class="a1pz58blc"/><path class="p7a2b8b9r"/><path class="srygt-0la"/></g>`,
		"fallback": "solar:confounded-square-bold-duotone",
	});
}

export default Component;
