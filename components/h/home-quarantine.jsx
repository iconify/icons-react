import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yj830b0go.css';
import '../../css/u/u5lmjticq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yj830b0go"/><path clip-rule="evenodd" class="u5lmjticq"/></g>`,
		"fallback": "healthicons:home-quarantine",
	});
}

export default Component;
