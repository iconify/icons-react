import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/es4g5_fvh.css';
import '../../css/f/f89z5_a7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="es4g5_fvh"/><path clip-rule="evenodd" class="f89z5_a7o"/></g>`,
		"fallback": "healthicons:allergies-outline-24px",
	});
}

export default Component;
