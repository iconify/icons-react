import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/la--7ib8h.css';
import '../../css/e/e06ot6o4h.css';
import '../../css/k/k85dgg62q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="la--7ib8h"/><path class="e06ot6o4h"/><path class="k85dgg62q"/></g>`,
		"fallback": "solar:box-minimalistic-bold",
	});
}

export default Component;
