import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dff9ol9go.css';
import '../../css/g/g_xe81d2p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dff9ol9go"/><path clip-rule="evenodd" class="g_xe81d2p"/></g>`,
		"fallback": "heroicons:cpu-chip-20-solid",
	});
}

export default Component;
