import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t3fmph07q.css';
import '../../css/z/zed8uz8yd.css';
import '../../css/e/exdiltbqb.css';
import '../../css/r/rjtu802pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t3fmph07q wm-k"/><path class="wm-a zed8uz8yd"/><path class="exdiltbqb wm-k"/><path class="rjtu802pw wm-a"/></g>`,
		"fallback": "withicons:handshake-sketch",
	});
}

export default Component;
