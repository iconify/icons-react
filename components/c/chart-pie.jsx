import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d7j47q-dh.css';
import '../../css/g/gcc_iacbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d7j47q-dh"/><path class="gcc_iacbm wm-a"/></g>`,
		"fallback": "withicons:chart-pie",
	});
}

export default Component;
