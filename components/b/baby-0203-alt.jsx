import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smptxabio.css';
import '../../css/f/fy9z271rq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="smptxabio"/><path clip-rule="evenodd" class="fy9z271rq"/></g>`,
		"fallback": "healthicons:baby-0203-alt",
	});
}

export default Component;
