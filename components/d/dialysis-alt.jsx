import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pbv5g6b3m.css';
import '../../css/b/brj4aoubv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pbv5g6b3m"/><path clip-rule="evenodd" class="brj4aoubv"/></g>`,
		"fallback": "healthicons:dialysis-alt",
	});
}

export default Component;
