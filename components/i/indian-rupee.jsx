import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ys-kpohii.css';
import '../../css/g/gwkh9hb-c.css';
import '../../css/r/r6-xr0tdo.css';
import '../../css/c/cssruab1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k ys-kpohii"/><path class="gwkh9hb-c wm-deco"/><path class="r6-xr0tdo wm-k"/><path class="cssruab1r wm-shadow"/></g>`,
		"fallback": "withicons-valentine:indian-rupee",
	});
}

export default Component;
