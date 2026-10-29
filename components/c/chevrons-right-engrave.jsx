import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dtakehbua.css';
import '../../css/f/f0qq2vbkf.css';
import '../../css/q/qnbwq9lbv.css';
import '../../css/b/bnbj9bspw.css';
import '../../css/e/et5-78afr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dtakehbua wm-k"/><path class="f0qq2vbkf wm-a"/><path class="qnbwq9lbv wm-shadow"/><path class="bnbj9bspw wm-k"/><path class="et5-78afr wm-a"/></g>`,
		"fallback": "withicons:chevrons-right-engrave",
	});
}

export default Component;
