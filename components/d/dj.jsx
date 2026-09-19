import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni43jjnix.css';
import '../../css/e/e8ipl-x7v.css';
import '../../css/w/ww34jcb9r.css';
import '../../css/x/xlqxtpbnh.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ni43jjnix"/><path class="e8ipl-x7v"/><path class="ww34jcb9r"/><path class="xlqxtpbnh"/></g>`,
		"fallback": "cif:dj",
	});
}

export default Component;
