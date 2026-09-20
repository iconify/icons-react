import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wsir_bc4l.css';
import '../../css/t/t_n5ogbuh.css';
import '../../css/h/h18qvtb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wsir_bc4l"/><path clip-rule="evenodd" class="t_n5ogbuh"/><path class="h18qvtb0u"/></g>`,
		"fallback": "solar:card-2-bold",
	});
}

export default Component;
