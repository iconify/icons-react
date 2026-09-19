import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz-biobdg.css';
import '../../css/g/gugmgrnjp.css';
import '../../css/d/d09h2ubln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uz-biobdg"/><path class="gugmgrnjp"/><path clip-rule="evenodd" class="d09h2ubln"/></g>`,
		"fallback": "pepicons:car",
	});
}

export default Component;
