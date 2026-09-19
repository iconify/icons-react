import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hb8cpl1hx.css';
import '../../css/e/em_jxkb7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hb8cpl1hx"/><path class="em_jxkb7e"/></g>`,
		"fallback": "healthicons:arm-circumference",
	});
}

export default Component;
