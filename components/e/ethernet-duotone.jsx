import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8yco_sde.css';
import '../../css/y/yr5b3o6qd.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z8yco_sde"/><path class="yr5b3o6qd"/></g>`,
		"fallback": "pullo:ethernet-duotone",
	});
}

export default Component;
