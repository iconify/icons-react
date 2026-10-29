import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e3728q2fv.css';
import '../../css/j/j1tznqzdp.css';
import '../../css/y/ykgkceq4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e3728q2fv"/><path class="j1tznqzdp wm-k"/><path class="wm-a ykgkceq4i"/></g>`,
		"fallback": "withicons:footprints-sketch",
	});
}

export default Component;
