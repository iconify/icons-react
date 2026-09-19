import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sxm8vquti.css';
import '../../css/h/hxqfdkb7h.css';
import '../../css/e/eu4j08t3g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sxm8vquti"/><path class="hxqfdkb7h"/><path class="eu4j08t3g"/></g>`,
		"fallback": "glyphs-poly:crown-3",
	});
}

export default Component;
