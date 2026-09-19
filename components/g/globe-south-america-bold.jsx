import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfdnlqvyw.css';
import '../../css/q/qb0mibb1e.css';
import '../../css/w/w4ipckadh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lfdnlqvyw"/><path clip-rule="evenodd" class="qb0mibb1e"/><path class="w4ipckadh"/></g>`,
		"fallback": "glyphs:globe-south-america-bold",
	});
}

export default Component;
