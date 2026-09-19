import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tkz1d8fvs.css';
import '../../css/a/axl_d5b5w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="tkz1d8fvs"/><path clip-rule="evenodd" class="axl_d5b5w"/></g>`,
		"fallback": "pepicons:circle-print",
	});
}

export default Component;
