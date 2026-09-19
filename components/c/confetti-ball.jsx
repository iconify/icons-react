import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ig26mjbzc.css';
import '../../css/t/t3jy2rbpz.css';
import '../../css/q/qr62tsbbz.css';
import '../../css/z/zth3hmbbw.css';
import '../../css/p/pnwnsi4_u.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)"><path class="ig26mjbzc"/><path class="t3jy2rbpz"/><path class="qr62tsbbz"/><path class="zth3hmbbw"/><path class="pnwnsi4_u"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`,
		"fallback": "fluent-emoji-flat:confetti-ball",
	});
}

export default Component;
