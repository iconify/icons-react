import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/u/uqb2yhb9e.css';
import '../../css/r/r9qafxweb.css';
import '../../css/n/naxhlg8gz.css';
import '../../css/f/fh-m7db9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="uqb2yhb9e"/><path class="r9qafxweb"/><path class="naxhlg8gz"/><path class="fh-m7db9h"/></g>`,
		"fallback": "withicons-retro:circuit-board",
	});
}

export default Component;
