import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1_kkbbdy.css';
import '../../css/q/qqm5c8b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f1_kkbbdy"/><path class="qqm5c8b1f"/></g>`,
		"fallback": "coolicons:column-minus-bulk-round",
	});
}

export default Component;
