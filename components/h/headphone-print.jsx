import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5j-yozem.css';
import '../../css/h/h109fbbfv.css';
import '../../css/b/bwdsidbcp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p5j-yozem"/><path class="h109fbbfv"/><path class="bwdsidbcp"/></g>`,
		"fallback": "pepicons:headphone-print",
	});
}

export default Component;
