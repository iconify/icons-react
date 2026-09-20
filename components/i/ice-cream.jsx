import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e82tsabvb.css';
import '../../css/w/wlil-ulli.css';
import '../../css/d/d97lzreei.css';
import '../../css/r/rr0sjmbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e82tsabvb"/><path class="wlil-ulli"/><path class="d97lzreei"/><path class="rr0sjmbdt"/></g>`,
		"fallback": "tdesign:ice-cream",
	});
}

export default Component;
