import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/egd1z_woj.css';
import '../../css/u/uep3zr_ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="egd1z_woj secondary"/><path class="primary uep3zr_ws"/></g>`,
		"fallback": "iconaut:arrow-u-turn-left-duotone",
	});
}

export default Component;
