import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mbsc-1b5r.css';
import '../../css/e/eixrv1bce.css';
import '../../css/o/o3h4-07ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mbsc-1b5r"/><path class="eixrv1bce"/><path class="o3h4-07ri"/></g>`,
		"fallback": "hugeicons:blood",
	});
}

export default Component;
