import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t35-rkdzm.css';
import '../../css/e/es6y09b8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t35-rkdzm"/><path clip-rule="evenodd" class="es6y09b8s"/></g>`,
		"fallback": "healthicons:city",
	});
}

export default Component;
