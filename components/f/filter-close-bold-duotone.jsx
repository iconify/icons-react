import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d1rc6hbfn.css';
import '../../css/u/urw1rmb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d1rc6hbfn"/><path class="urw1rmb3r"/></g>`,
		"fallback": "solar:filter-close-bold-duotone",
	});
}

export default Component;
