import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d9xgfxb_x.css';
import '../../css/x/xw-7eg54w.css';
import '../../css/e/eb3xgcuwx.css';
import '../../css/i/id-m5w0yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d9xgfxb_x wm-shadow"/><path class="xw-7eg54w"/><path class="eb3xgcuwx"/><path class="id-m5w0yx"/></g>`,
		"fallback": "withicons-retro:banknote",
	});
}

export default Component;
