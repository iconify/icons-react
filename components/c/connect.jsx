import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxg2jp9yl.css';
import '../../css/m/mnbpz8tnh.css';
import '../../css/j/jite-xbbj.css';
import '../../css/j/ji11obcrd.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)"><path class="xxg2jp9yl"/><path class="mnbpz8tnh"/><path class="jite-xbbj"/><path class="ji11obcrd"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:connect",
	});
}

export default Component;
