import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i56ns5bes.css';
import '../../css/o/ol-ghh4bp.css';
import '../../css/j/j2f-64b_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i56ns5bes"/><path clip-rule="evenodd" class="ol-ghh4bp"/><path class="j2f-64b_n"/></g>`,
		"fallback": "healthicons:asthma-outline",
	});
}

export default Component;
