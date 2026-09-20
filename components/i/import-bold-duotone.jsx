import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xn75ilbko.css';
import '../../css/q/q3_0imbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xn75ilbko"/><path clip-rule="evenodd" class="q3_0imbkk"/></g>`,
		"fallback": "solar:import-bold-duotone",
	});
}

export default Component;
