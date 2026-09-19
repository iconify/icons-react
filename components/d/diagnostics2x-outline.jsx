import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2-lv5boq.css';
import '../../css/o/o34fr3bgc.css';
import '../../css/v/v52a6hbjy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f2-lv5boq"/><path clip-rule="evenodd" class="o34fr3bgc"/><path class="v52a6hbjy"/></g>`,
		"fallback": "healthicons:diagnostics2x-outline",
	});
}

export default Component;
