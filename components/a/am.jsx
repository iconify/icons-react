import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5vhwtynz.css';
import '../../css/a/a9r31u7se.css';
import '../../css/w/weg23q2cc.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5vhwtynz"/><path class="a9r31u7se"/><path class="weg23q2cc"/></g>`,
		"fallback": "cif:am",
	});
}

export default Component;
