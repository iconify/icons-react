import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w71g6db2h.css';
import '../../css/t/t2y3wumjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w71g6db2h"/><path class="t2y3wumjk"/></g>`,
		"fallback": "coolicons:certificate-duotone-round",
	});
}

export default Component;
