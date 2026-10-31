import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sadveqb2o.css';
import '../../css/j/j8-jbglob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sadveqb2o"/><path class="j8-jbglob"/></g>`,
		"fallback": "coolicons:external-link-bulk-round",
	});
}

export default Component;
