import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jnlx1ibsq.css';
import '../../css/t/t5ii0tigx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jnlx1ibsq"/><path class="t5ii0tigx"/></g>`,
		"fallback": "coolicons:calculator-bulk-round",
	});
}

export default Component;
