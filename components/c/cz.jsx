import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wn3x9gn0i.css';
import '../../css/r/r_i9c3bep.css';
import '../../css/u/uaelztb0z.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wn3x9gn0i"/><path class="r_i9c3bep"/><path class="uaelztb0z"/></g>`,
		"fallback": "cif:cz",
	});
}

export default Component;
