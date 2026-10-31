import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qxhez1b1m.css';
import '../../css/h/htnt4uysm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qxhez1b1m"/><path class="htnt4uysm"/></g>`,
		"fallback": "coolicons:fold-horizontal-bulk-round",
	});
}

export default Component;
