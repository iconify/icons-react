import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oan3fnbps.css';
import '../../css/h/hfrzhgbxq.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/m/mxu7rcbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oan3fnbps"/><path class="hfrzhgbxq wm-a"/><path class="yw4fz_b6b"/><path class="mxu7rcbqr wm-a"/></g>`,
		"fallback": "withicons:basketball-duo",
	});
}

export default Component;
