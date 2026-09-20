import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/adroolzus.css';
import '../../css/r/r58oonoyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="adroolzus"/><path class="r58oonoyn"/></g>`,
		"fallback": "solar:glasses-bold-duotone",
	});
}

export default Component;
