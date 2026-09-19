import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wy1qmwb1c.css';
import '../../css/p/pfww3mgru.css';
import '../../css/d/d9kll0v9v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wy1qmwb1c"/><path clip-rule="evenodd" class="pfww3mgru"/><path class="d9kll0v9v"/></g>`,
		"fallback": "healthicons:endotracheal-tube-outline",
	});
}

export default Component;
