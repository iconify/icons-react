import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snak3xb7s.css';
import '../../css/l/leuvvw0fo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="snak3xb7s"/><path class="leuvvw0fo"/></g>`,
		"fallback": "glyphs-poly:foot-print",
	});
}

export default Component;
