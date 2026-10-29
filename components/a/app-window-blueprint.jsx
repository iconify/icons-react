import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yhaiccbkb.css';
import '../../css/g/g2xclxbug.css';
import '../../css/e/e_vgx2bxs.css';
import '../../css/g/g136touho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yhaiccbkb"/><path class="g2xclxbug wm-deco"/><path class="e_vgx2bxs wm-k"/><path class="g136touho wm-a"/></g>`,
		"fallback": "withicons:app-window-blueprint",
	});
}

export default Component;
