import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb3h7gbmm.css';
import '../../css/g/gnn16ib-w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jb3h7gbmm"/><path class="gnn16ib-w"/></g>`,
		"fallback": "glyphs-poly:arrow-level",
	});
}

export default Component;
