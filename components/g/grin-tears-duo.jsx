import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr4lywbge.css';
import '../../css/l/lrw14ub0z.css';
import '../../css/g/gytayk9aj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rr4lywbge"/><path class="lrw14ub0z"/><path class="gytayk9aj"/></g>`,
		"fallback": "glyphs:grin-tears-duo",
	});
}

export default Component;
