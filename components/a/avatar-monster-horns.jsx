import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i0hzoud3l.css';
import '../../css/k/klh6r7b1o.css';
import '../../css/i/i1t53ok8e.css';
import '../../css/r/rng7_rbcv.css';
import '../../css/h/hu8rxwbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i0hzoud3l wm-k"/><path class="klh6r7b1o wm-a"/><path class="i1t53ok8e wm-k"/><path class="rng7_rbcv"/><path class="hu8rxwbhq"/></g>`,
		"fallback": "withicons-bauhaus:avatar-monster-horns",
	});
}

export default Component;
