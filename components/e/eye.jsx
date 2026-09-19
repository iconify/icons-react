import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o54-6mbhr.css';
import '../../css/d/d3du7rbey.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o54-6mbhr"/><path clip-rule="evenodd" class="d3du7rbey"/></g>`,
		"fallback": "heroicons-solid:eye",
	});
}

export default Component;
