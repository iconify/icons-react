import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cw1r4wl-u.css';
import '../../css/d/djzed1b0f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cw1r4wl-u"/><path clip-rule="evenodd" class="djzed1b0f"/></g>`,
		"fallback": "healthicons:clinical-f-outline",
	});
}

export default Component;
