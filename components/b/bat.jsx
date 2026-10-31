import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/ttrhctg_h.css';
import '../../css/a/aqpidbcvq.css';
import '../../css/x/x8-uv88zv.css';
import '../../css/e/ep538wbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ttrhctg_h wm-shadow"/><path class="aqpidbcvq"/><path class="x8-uv88zv"/><path class="ep538wbdl"/></g>`,
		"fallback": "withicons-retro:bat",
	});
}

export default Component;
