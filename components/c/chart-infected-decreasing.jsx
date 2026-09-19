import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m89qgbkka.css';
import '../../css/d/d0te44bof.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m89qgbkka"/><path class="d0te44bof"/></g>`,
		"fallback": "healthicons:chart-infected-decreasing",
	});
}

export default Component;
