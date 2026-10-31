import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhsaz8brf.css';
import '../../css/x/xha3m7bla.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jhsaz8brf"/><path class="xha3m7bla"/></g>`,
		"fallback": "cif:id",
	});
}

export default Component;
