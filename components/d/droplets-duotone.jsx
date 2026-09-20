import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eovx-6bvh.css';
import '../../css/q/q62eb2b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eovx-6bvh"/><path class="q62eb2b2r"/></g>`,
		"fallback": "keyline-icons:droplets-duotone",
	});
}

export default Component;
