import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/i/in-2olb0z.css';
import '../../css/k/k4r_ecbom.css';
import '../../css/d/d-_t91b_v.css';
import '../../css/b/bhuivwsqr.css';
import '../../css/k/kulkvfbzw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="in-2olb0z"/><path class="k4r_ecbom"/></g><path clip-rule="evenodd" class="d-_t91b_v"/><path class="bhuivwsqr"/><path clip-rule="evenodd" class="kulkvfbzw"/></g>`,
		"fallback": "pepicons-print:clipboard-check",
	});
}

export default Component;
