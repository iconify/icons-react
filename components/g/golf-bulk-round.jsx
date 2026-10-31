import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1ptp7-kw.css';
import '../../css/j/j_phh1bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n1ptp7-kw"/><path class="j_phh1bkl"/></g>`,
		"fallback": "coolicons:golf-bulk-round",
	});
}

export default Component;
