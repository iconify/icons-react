import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tx07i-bgb.css';
import '../../css/q/qv2zs89mx.css';
import '../../css/i/i8wqk5bpm.css';
import '../../css/m/m1x9aqbbi.css';
import '../../css/n/nzf69t93l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tx07i-bgb wm-k"/><path class="qv2zs89mx wm-a"/><path class="i8wqk5bpm wm-shadow"/><path class="m1x9aqbbi wm-k"/><path class="nzf69t93l wm-a"/></g>`,
		"fallback": "withicons:corner-down-left-engrave",
	});
}

export default Component;
