import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rku3b2bcx.css';
import '../../css/u/upb6ybc_m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rku3b2bcx"/><path class="upb6ybc_m"/></g>`,
		"fallback": "glyphs:calculator-duo",
	});
}

export default Component;
