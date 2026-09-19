import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/es5a3xr1s.css';
import '../../css/b/bb4vrvbzl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="es5a3xr1s"/><path clip-rule="evenodd" class="bb4vrvbzl"/></g>`,
		"fallback": "healthicons:burn-outline",
	});
}

export default Component;
