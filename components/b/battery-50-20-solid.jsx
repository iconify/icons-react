import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4l7b9bzv.css';
import '../../css/o/ox011_f-g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e4l7b9bzv"/><path clip-rule="evenodd" class="ox011_f-g"/></g>`,
		"fallback": "heroicons:battery-50-20-solid",
	});
}

export default Component;
