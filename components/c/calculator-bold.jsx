import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usz420qgc.css';
import '../../css/x/xatv18b1s.css';
import '../../css/h/h_xt7vbfu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="usz420qgc"><rect class="xatv18b1s"/><path class="h_xt7vbfu"/></g>`,
		"fallback": "glyphs:calculator-bold",
	});
}

export default Component;
