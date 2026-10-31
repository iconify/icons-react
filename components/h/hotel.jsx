import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/crtxj72_r.css';
import '../../css/c/cg1uq5joa.css';
import '../../css/u/urpyplw7t.css';
import '../../css/j/jigshfz4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="crtxj72_r wm-shadow"/><path class="cg1uq5joa wm-shadow"/><path class="urpyplw7t"/><path class="jigshfz4e"/></g>`,
		"fallback": "withicons-brutal:hotel",
	});
}

export default Component;
