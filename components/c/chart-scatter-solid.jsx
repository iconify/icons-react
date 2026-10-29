import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k2k2-hhhc.css';
import '../../css/t/tqnzgfb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k2k2-hhhc"/><path class="tqnzgfb9w wm-a"/></g>`,
		"fallback": "withicons:chart-scatter-solid",
	});
}

export default Component;
