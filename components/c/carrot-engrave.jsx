import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ahi8tac9b.css';
import '../../css/x/xer700j8e.css';
import '../../css/m/m97uk4qod.css';
import '../../css/k/kqp_we97z.css';
import '../../css/d/domdhwbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ahi8tac9b wm-k"/><path class="wm-a xer700j8e"/><path class="m97uk4qod wm-shadow"/><path class="kqp_we97z wm-k"/><path class="domdhwbzo wm-a"/></g>`,
		"fallback": "withicons:carrot-engrave",
	});
}

export default Component;
