import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r3o29sbqk.css';
import '../../css/e/e0p7_drmn.css';
import '../../css/i/ijsusebaa.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r3o29sbqk"/><path class="e0p7_drmn"/><path class="ijsusebaa"/></g>`,
		"fallback": "cif:bf",
	});
}

export default Component;
