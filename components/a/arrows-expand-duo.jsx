import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0lvivb4x.css';
import '../../css/m/me-irab7m.css';
import '../../css/f/f_rhc-bwk.css';
import '../../css/m/m-i1l3b8r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0lvivb4x"/><path class="me-irab7m"/><path class="f_rhc-bwk"/><path class="m-i1l3b8r"/></g>`,
		"fallback": "glyphs-poly:arrows-expand-duo",
	});
}

export default Component;
