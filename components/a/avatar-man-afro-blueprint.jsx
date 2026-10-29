import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/artw48xjn.css';
import '../../css/j/jx0920bjc.css';
import '../../css/x/xxjaxvbua.css';
import '../../css/x/x3ijdbcbr.css';
import '../../css/e/ep0ats0jq.css';
import '../../css/p/pe518xlqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="artw48xjn wm-deco"/><path class="jx0920bjc wm-deco"/><path class="wm-deco xxjaxvbua"/><path class="wm-k x3ijdbcbr"/><path class="ep0ats0jq wm-a"/><path class="pe518xlqe wm-a"/></g>`,
		"fallback": "withicons:avatar-man-afro-blueprint",
	});
}

export default Component;
