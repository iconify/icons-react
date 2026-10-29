import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ei-pymb0m.css';
import '../../css/l/ldvozjbgv.css';
import '../../css/h/hmu5dpbwc.css';
import '../../css/z/z3cb_j7ez.css';
import '../../css/q/q0z4nob4z.css';
import '../../css/i/ild3phboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ei-pymb0m wm-k"/><path class="ldvozjbgv wm-a"/><path class="hmu5dpbwc wm-shadow"/><path class="wm-k z3cb_j7ez"/><path class="q0z4nob4z wm-a"/><path class="ild3phboo wm-k"/></g>`,
		"fallback": "withicons:bus-engrave",
	});
}

export default Component;
