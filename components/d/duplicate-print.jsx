import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2fzalbpg.css';
import '../../css/j/jfesrw_tv.css';
import '../../css/f/ftj9ogb6c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h2fzalbpg"/><path clip-rule="evenodd" class="jfesrw_tv"/><path class="ftj9ogb6c"/></g>`,
		"fallback": "pepicons:duplicate-print",
	});
}

export default Component;
