import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxj73wbcy.css';
import '../../css/o/oawsmeb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hxj73wbcy"/><path class="oawsmeb2e"/></g>`,
		"fallback": "gg:digitalocean",
	});
}

export default Component;
