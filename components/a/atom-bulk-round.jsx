import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kctnir3bq.css';
import '../../css/b/bxwmt703b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kctnir3bq"/><path class="bxwmt703b"/></g>`,
		"fallback": "coolicons:atom-bulk-round",
	});
}

export default Component;
