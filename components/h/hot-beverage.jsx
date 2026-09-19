import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk-h0-qwz.css';
import '../../css/a/ay9z9qbkf.css';
import '../../css/p/pxocl7ibk.css';
import '../../css/d/dwefpzbfy.css';
import '../../css/i/is485j6tj.css';
import '../../css/o/oqc3y7p7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yk-h0-qwz"/><path class="ay9z9qbkf"/><path class="pxocl7ibk"/><path class="dwefpzbfy"/><path class="is485j6tj"/><path class="oqc3y7p7e"/></g>`,
		"fallback": "fluent-emoji-flat:hot-beverage",
	});
}

export default Component;
