import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/r/rhctu04pv.css';
import '../../css/d/dbcwgdbor.css';
import '../../css/h/hwvxncbyx.css';
import '../../css/r/rze47ib2l.css';
import '../../css/r/r0d-q6u0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="rhctu04pv"/><path class="dbcwgdbor"/><path class="hwvxncbyx"/><path class="rze47ib2l"/><path class="r0d-q6u0t"/></g>`,
		"fallback": "withicons-retro:info-circle",
	});
}

export default Component;
