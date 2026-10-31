import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug9yri-qt.css';
import '../../css/f/fmudt6tcz.css';
import '../../css/r/r1wnigb9c.css';
import '../../css/e/etrreifsd.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ug9yri-qt"/><path class="fmudt6tcz"/><path class="r1wnigb9c"/><path class="etrreifsd"/></g>`,
		"fallback": "cif:gh",
	});
}

export default Component;
