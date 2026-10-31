import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ioprt-eyc.css';
import '../../css/q/q7bburbqc.css';
import '../../css/l/ln0vr5b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ioprt-eyc wm-shadow"/><path class="q7bburbqc"/><path class="ln0vr5b8w"/></g>`,
		"fallback": "withicons-retro:inbox",
	});
}

export default Component;
