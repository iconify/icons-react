import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mspkvccag.css';
import '../../css/h/h5vdntb-g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mspkvccag"/><path class="h5vdntb-g"/></g>`,
		"fallback": "healthicons:breasts-outline",
	});
}

export default Component;
