import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g-d_bnj-u.css';
import '../../css/p/pf9f3hnhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g-d_bnj-u"/><path clip-rule="evenodd" class="pf9f3hnhc"/></g>`,
		"fallback": "healthicons:height2x-outline",
	});
}

export default Component;
