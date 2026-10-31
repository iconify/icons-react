import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ub4xlibmk.css';
import '../../css/c/c5_jg6bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ub4xlibmk"/><path class="c5_jg6bea"/></g>`,
		"fallback": "coolicons:figma-bulk-round",
	});
}

export default Component;
