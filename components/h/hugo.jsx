import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2h1m6jhn.css';
import '../../css/m/mis7tbbrp.css';
import '../../css/i/ibs3hhbsr.css';
import '../../css/d/dyvebtbpr.css';
import '../../css/d/d335z3bto.css';
import '../../css/f/f1v8uixgp.css';

const viewBox = {"width":1493,"height":391};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j2h1m6jhn"><path class="mis7tbbrp"/><path class="ibs3hhbsr"/><path class="dyvebtbpr"/><path class="d335z3bto"/><path class="f1v8uixgp"/></g>`,
		"fallback": "thesvg-color:hugo",
	});
}

export default Component;
