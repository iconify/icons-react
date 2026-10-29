import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fwjz04bkr.css';
import '../../css/w/wfty0mm_t.css';
import '../../css/y/yr9-fbbjj.css';
import '../../css/x/xvg5t8bzk.css';
import '../../css/p/px00y_byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fwjz04bkr"/><path class="wfty0mm_t wm-shadow"/><path class="yr9-fbbjj"/><path class="xvg5t8bzk"/><path class="px00y_byw"/></g>`,
		"fallback": "withicons:avatar-teen-engrave",
	});
}

export default Component;
