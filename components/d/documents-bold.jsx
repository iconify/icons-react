import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/od6evsbxr.css';
import '../../css/f/fp06y8bqm.css';
import '../../css/r/rsvmd3nqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="od6evsbxr"/><path class="fp06y8bqm"/><path class="rsvmd3nqe"/></g>`,
		"fallback": "solar:documents-bold",
	});
}

export default Component;
