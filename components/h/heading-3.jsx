import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/axq7gs_7c.css';
import '../../css/j/ju7wtzbyn.css';
import '../../css/s/s4gtlgd5m.css';
import '../../css/q/qkqny8yvr.css';
import '../../css/a/axqmkdbyc.css';
import '../../css/g/gz6sk1btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG1BZAzdxs" x1="9.99" x2="13.99" y1="3.02" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="axq7gs_7c wm-k"/><path class="ju7wtzbyn wm-s"/><path class="s4gtlgd5m wm-deco"/><path fill="url(#SVG1BZAzdxs)" class="qkqny8yvr wm-k"/><path class="axqmkdbyc wm-s"/><path class="gz6sk1btq wm-shadow"/></g>`,
		"fallback": "withicons-valentine:heading-3",
	});
}

export default Component;
