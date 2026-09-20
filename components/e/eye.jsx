import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ppl1dfbol.css';
import '../../css/l/lxnrhrbcb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ppl1dfbol"/><path class="lxnrhrbcb"/></g>`,
		"fallback": "pepicons-pencil:eye",
	});
}

export default Component;
