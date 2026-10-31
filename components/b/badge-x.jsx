import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zc3svkblt.css';
import '../../css/j/j-s_68b8w.css';
import '../../css/r/r09u1cb9r.css';
import '../../css/w/wb_ktub6l.css';
import '../../css/h/h921q13ns.css';
import '../../css/z/zhg97wwre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zc3svkblt"/><path class="j-s_68b8w"/><path class="r09u1cb9r"/><path class="wb_ktub6l"/><path class="h921q13ns"/><path class="zhg97wwre"/></g>`,
		"fallback": "withicons-retro:badge-x",
	});
}

export default Component;
