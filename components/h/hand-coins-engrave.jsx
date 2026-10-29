import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hh3jn-mmn.css';
import '../../css/y/y_e3-vbsq.css';
import '../../css/q/qkney1btx.css';
import '../../css/y/yy33eebqt.css';
import '../../css/i/i-e0xfb7g.css';
import '../../css/k/kd4jkuf5m.css';
import '../../css/j/j_5p8mbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hh3jn-mmn wm-k"/><path class="wm-a y_e3-vbsq"/><path class="qkney1btx wm-shadow"/><path class="wm-a yy33eebqt"/><path class="i-e0xfb7g wm-k"/><path class="kd4jkuf5m wm-a"/><path class="j_5p8mbom wm-a"/></g>`,
		"fallback": "withicons:hand-coins-engrave",
	});
}

export default Component;
