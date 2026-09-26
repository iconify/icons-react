import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dwo2whnpo.css';
import '../../css/m/mdcwmfbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dwo2whnpo"/><path class="mdcwmfbvh"/></g>`,
		"fallback": "solar:arrow-up-to-line-bold",
	});
}

export default Component;
