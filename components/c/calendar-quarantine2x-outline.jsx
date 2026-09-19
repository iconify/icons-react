import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yvduz7rkw.css';
import '../../css/f/fx29-ogfr.css';
import '../../css/u/ud58kx82j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yvduz7rkw"/><path clip-rule="evenodd" class="fx29-ogfr"/><path class="ud58kx82j"/></g>`,
		"fallback": "healthicons:calendar-quarantine2x-outline",
	});
}

export default Component;
