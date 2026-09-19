import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ljvyadc0d.css';
import '../../css/d/dw39a-bwv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ljvyadc0d"/><path class="dw39a-bwv"/></g>`,
		"fallback": "healthicons:crutches",
	});
}

export default Component;
