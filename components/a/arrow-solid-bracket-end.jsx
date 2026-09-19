import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jaqp_8b4j.css';
import '../../css/u/uvug2xw2n.css';
import '../../css/d/d-d0chbey.css';
import '../../css/v/v2qi7vbvo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jaqp_8b4j"/><path clip-rule="evenodd" class="uvug2xw2n"/><path class="d-d0chbey"/><path class="v2qi7vbvo"/></g>`,
		"fallback": "glyphs-poly:arrow-solid-bracket-end",
	});
}

export default Component;
