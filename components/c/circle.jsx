import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jf1adk6iy.css';
import '../../css/f/f6iotpbxr.css';
import '../../css/m/m66-1ri6q.css';
import '../../css/x/xrzbtebzf.css';
import '../../css/l/li1o_ub6x.css';
import '../../css/q/qjvslkisf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jf1adk6iy wm-shadow"/><path class="f6iotpbxr"/><path class="m66-1ri6q"/><path class="xrzbtebzf"/><path class="li1o_ub6x"/><path class="qjvslkisf"/></g>`,
		"fallback": "withicons-retro:circle",
	});
}

export default Component;
