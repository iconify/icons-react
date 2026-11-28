import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bi20ndt2y.css';
import '../../css/m/musq95nnq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bi20ndt2y"/><path class="musq95nnq"/></g>`,
		"fallback": "pullo:border-none-duotone",
	});
}

export default Component;
