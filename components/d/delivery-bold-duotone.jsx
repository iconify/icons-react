import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bp50gk8nz.css';
import '../../css/z/zvbw9oqkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bp50gk8nz"/><path class="zvbw9oqkj"/></g>`,
		"fallback": "solar:delivery-bold-duotone",
	});
}

export default Component;
