import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/th__ckbpc.css';
import '../../css/w/wct20lfot.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="th__ckbpc"/><path class="wct20lfot"/></g>`,
		"fallback": "heroicons:chart-pie-20-solid",
	});
}

export default Component;
