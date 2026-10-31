import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f70r1k1nq.css';
import '../../css/b/bn3ushtud.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f70r1k1nq"/><path class="bn3ushtud"/></g>`,
		"fallback": "cif:cn",
	});
}

export default Component;
