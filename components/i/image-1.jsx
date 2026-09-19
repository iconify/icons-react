import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l05hwhz0h.css';
import '../../css/j/jygke8bny.css';
import '../../css/v/vr_4k14lh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="l05hwhz0h"/><path clip-rule="evenodd" class="jygke8bny"/><path class="vr_4k14lh"/></g>`,
		"fallback": "glyphs-poly:image-1",
	});
}

export default Component;
