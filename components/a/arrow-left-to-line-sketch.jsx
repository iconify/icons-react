import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pywsmcckd.css';
import '../../css/v/vvr311bdw.css';
import '../../css/m/mhhe0cccx.css';
import '../../css/a/avlazkjhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pywsmcckd wm-k"/><path class="vvr311bdw wm-a"/><path class="mhhe0cccx wm-k"/><path class="avlazkjhj wm-a"/></g>`,
		"fallback": "withicons:arrow-left-to-line-sketch",
	});
}

export default Component;
