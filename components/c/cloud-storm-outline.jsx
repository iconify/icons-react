import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpmrcbb5z.css';
import '../../css/o/oq4fybckd.css';
import '../../css/k/kwotsob1p.css';
import '../../css/o/o1btycv3s.css';
import '../../css/l/llv44swwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qpmrcbb5z"/><path class="oq4fybckd"/><path class="kwotsob1p"/><path class="o1btycv3s"/><path class="llv44swwl"/></g>`,
		"fallback": "solar:cloud-storm-outline",
	});
}

export default Component;
