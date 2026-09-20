import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c--ct8_wq.css';
import '../../css/l/lawdo_brr.css';
import '../../css/k/kkl9unbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c--ct8_wq"/><path class="lawdo_brr"/><path class="kkl9unbzu"/></g>`,
		"fallback": "solar:code-bold",
	});
}

export default Component;
