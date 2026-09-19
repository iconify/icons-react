import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7wa49b_l.css';
import '../../css/f/fljffubat.css';
import '../../css/v/vo-gp5bco.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7wa49b_l"/><path class="fljffubat"/><path class="vo-gp5bco"/></g>`,
		"fallback": "cif:cy",
	});
}

export default Component;
