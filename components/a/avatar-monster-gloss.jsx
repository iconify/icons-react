import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r46bthbup.css';
import '../../css/g/gj4hr_bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r46bthbup wm-k"/><path class="gj4hr_bua wm-a"/></g>`,
		"fallback": "withicons:avatar-monster-gloss",
	});
}

export default Component;
