import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ugp-vy33b.css';
import '../../css/s/s_i4rcbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ugp-vy33b"/><path class="s_i4rcbgw"/></g>`,
		"fallback": "solar:download-minimalistic-outline",
	});
}

export default Component;
