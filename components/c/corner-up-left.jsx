import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fylkm3hdn.css';
import '../../css/e/eo2p60b6l.css';
import '../../css/z/z9a0h3b_x.css';
import '../../css/q/qe8qxn9nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="fylkm3hdn wm-shadow"/><path class="eo2p60b6l wm-shadow"/><path class="z9a0h3b_x"/><path class="qe8qxn9nk"/></g>`,
		"fallback": "withicons-brutal:corner-up-left",
	});
}

export default Component;
