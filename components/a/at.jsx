import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pmv003mpv.css';
import '../../css/t/t1butsb-t.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pmv003mpv"/><path class="t1butsb-t"/></g>`,
		"fallback": "cif:at",
	});
}

export default Component;
