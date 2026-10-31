import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k7uif1ocp.css';
import '../../css/y/y-68b4omw.css';
import '../../css/a/aaabqvvyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k7uif1ocp wm-k"/><path class="wm-a y-68b4omw"/><path class="aaabqvvyv wm-k"/></g>`,
		"fallback": "withicons:avatar-person-headphones-gloss",
	});
}

export default Component;
