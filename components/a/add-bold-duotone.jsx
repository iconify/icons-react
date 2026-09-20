import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eeu3wm_8f.css';
import '../../css/a/ae9h0_buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eeu3wm_8f"/><path class="ae9h0_buw"/></g>`,
		"fallback": "solar:add-bold-duotone",
	});
}

export default Component;
