import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruunz1mfm.css';
import '../../css/n/n4d1ysgow.css';
import '../../css/s/sis5cgh5g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ruunz1mfm"/><path class="n4d1ysgow"/><path class="sis5cgh5g"/></g>`,
		"fallback": "glyphs:camcorder-duo",
	});
}

export default Component;
