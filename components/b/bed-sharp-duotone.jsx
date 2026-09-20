import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sh7hjab2q.css';
import '../../css/k/kqhe7jbbf.css';
import '../../css/b/bgktbgbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="sh7hjab2q"/><path clip-rule="evenodd" class="kqhe7jbbf"/><path class="bgktbgbir"/></g>`,
		"fallback": "keyline-icons:bed-sharp-duotone",
	});
}

export default Component;
