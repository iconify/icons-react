import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/la-ygdc8c.css';
import '../../css/p/pah5iracu.css';
import '../../css/y/yo9a9t66o.css';
import '../../css/x/xf-_rccam.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="la-ygdc8c"/><path clip-rule="evenodd" class="pah5iracu"/><path class="yo9a9t66o"/><path clip-rule="evenodd" class="xf-_rccam"/></g>`,
		"fallback": "glyphs:door-outline",
	});
}

export default Component;
