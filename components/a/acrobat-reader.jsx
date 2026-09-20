import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/diqbbibvq.css';
import '../../css/r/rxg8dmm-v.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)"><path class="diqbbibvq"/><path class="rxg8dmm-v"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:acrobat-reader",
	});
}

export default Component;
