import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cs2eqrb9g.css';
import '../../css/r/rflxhjpja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cs2eqrb9g"/><path class="rflxhjpja"/></g>`,
		"fallback": "healthicons:girl-1015y-outline",
	});
}

export default Component;
