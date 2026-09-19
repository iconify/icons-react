import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxltrgl6s.css';
import '../../css/d/dz-8qmb3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hxltrgl6s"/><path class="dz-8qmb3k"/></g>`,
		"fallback": "healthicons:endotracheal-tube",
	});
}

export default Component;
