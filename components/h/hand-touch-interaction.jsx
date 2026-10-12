import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkswdlqjs.css';
import '../../css/v/vr61ztbkn.css';
import '../../css/x/x1p2naccl.css';
import '../../css/y/ylp7ht2ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hkswdlqjs"/><path class="vr61ztbkn"/><path class="x1p2naccl"/><path class="ylp7ht2ne"/></g>`,
		"fallback": "andrsrxn:hand-touch-interaction",
	});
}

export default Component;
