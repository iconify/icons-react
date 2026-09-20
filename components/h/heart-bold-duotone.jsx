import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/julgavt1e.css';
import '../../css/t/tiimyff9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="julgavt1e"/><path class="tiimyff9f"/></g>`,
		"fallback": "solar:heart-bold-duotone",
	});
}

export default Component;
