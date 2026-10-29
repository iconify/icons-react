import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jtajxgb4n.css';
import '../../css/a/azal3rqdu.css';
import '../../css/s/si6j45b4s.css';
import '../../css/z/zmlmm24uq.css';
import '../../css/x/x1zm6fmqu.css';
import '../../css/o/o-czogb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jtajxgb4n wm-k"/><path class="azal3rqdu wm-k"/><path class="si6j45b4s wm-k"/><path class="wm-a zmlmm24uq"/><path class="wm-s x1zm6fmqu"/><path class="o-czogb1w wm-k"/></g>`,
		"fallback": "withicons:avatar-older-man-sketch",
	});
}

export default Component;
