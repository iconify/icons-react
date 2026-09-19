import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k3pi-5buh.css';
import '../../css/x/xi9sf57es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k3pi-5buh"/><path clip-rule="evenodd" class="xi9sf57es"/></g>`,
		"fallback": "flowbite:filter-dollar-solid",
	});
}

export default Component;
