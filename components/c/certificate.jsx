import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/agl_brovp.css';
import '../../css/r/r-9502pli.css';
import '../../css/u/uj6qtkbzg.css';
import '../../css/f/fm14h790q.css';
import '../../css/h/hhst26bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="agl_brovp wm-shadow"/><path class="r-9502pli wm-shadow"/><path class="uj6qtkbzg"/><path class="fm14h790q"/><path class="hhst26bpr"/></g>`,
		"fallback": "withicons-brutal:certificate",
	});
}

export default Component;
