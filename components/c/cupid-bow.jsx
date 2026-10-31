import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fqq3ldbgf.css';
import '../../css/s/saztvobfo.css';
import '../../css/f/fu2nrg4ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fqq3ldbgf wm-shadow"/><path class="saztvobfo"/><path class="fu2nrg4ev"/></g>`,
		"fallback": "withicons-retro:cupid-bow",
	});
}

export default Component;
