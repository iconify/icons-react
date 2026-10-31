import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyoysxbeg.css';
import '../../css/a/azwu9qu5g.css';
import '../../css/c/ciqxlebcd.css';
import '../../css/u/utdjmjo_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uyoysxbeg wm-k"/><path class="azwu9qu5g wm-deco"/><path class="ciqxlebcd wm-k"/><path class="utdjmjo_u wm-shadow"/></g>`,
		"fallback": "withicons-valentine:dollar-sign",
	});
}

export default Component;
