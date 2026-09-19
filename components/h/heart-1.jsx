import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i513c3bdm.css';
import '../../css/l/l7pnvrook.css';
import '../../css/h/hjuzicb2h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i513c3bdm"/><path class="l7pnvrook"/><path class="hjuzicb2h"/></g>`,
		"fallback": "glyphs-poly:heart-1",
	});
}

export default Component;
