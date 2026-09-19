import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r8g0e3uem.css';
import '../../css/l/l2d2u2gwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r8g0e3uem"/><path class="l2d2u2gwk"/></g>`,
		"fallback": "healthicons:alert-triangle-outline",
	});
}

export default Component;
