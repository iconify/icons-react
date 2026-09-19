import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sic0zt8nz.css';
import '../../css/q/qtlz6ccaa.css';
import '../../css/f/fo8q8bbcg.css';
import '../../css/p/p-c0qbcqp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sic0zt8nz"/><path class="qtlz6ccaa"/><path class="fo8q8bbcg"/><path class="p-c0qbcqp"/></g>`,
		"fallback": "pepicons:building-print",
	});
}

export default Component;
