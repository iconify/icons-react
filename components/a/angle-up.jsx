import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6g2bb68s.css';
import '../../css/d/ds5qc2bnf.css';
import '../../css/w/w-xkhkb-i.css';
import '../../css/f/fpwcizi8z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h6g2bb68s"/><path class="ds5qc2bnf"/><path class="w-xkhkb-i"/><path class="fpwcizi8z"/></g>`,
		"fallback": "pepicons-pencil:angle-up",
	});
}

export default Component;
