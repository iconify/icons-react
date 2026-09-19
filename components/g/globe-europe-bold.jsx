import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpin_ybto.css';
import '../../css/g/gfb8_jren.css';
import '../../css/d/dtjzbs3_r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bpin_ybto"/><path clip-rule="evenodd" class="gfb8_jren"/><path class="dtjzbs3_r"/></g>`,
		"fallback": "glyphs:globe-europe-bold",
	});
}

export default Component;
