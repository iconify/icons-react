import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u9r3bvb6y.css';
import '../../css/a/ahjhqib8o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u9r3bvb6y"/><path class="ahjhqib8o"/></g>`,
		"fallback": "healthicons:city-worker",
	});
}

export default Component;
