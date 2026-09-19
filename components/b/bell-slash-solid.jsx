import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ncedfg6nc.css';
import '../../css/t/t1hhv8b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ncedfg6nc"/><path clip-rule="evenodd" class="t1hhv8b2g"/></g>`,
		"fallback": "heroicons:bell-slash-solid",
	});
}

export default Component;
