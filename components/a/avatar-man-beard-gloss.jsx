import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cszr5abch.css';
import '../../css/y/yddw2s6ww.css';
import '../../css/z/zju4ovbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cszr5abch wm-k"/><path class="wm-k yddw2s6ww"/><path class="wm-k zju4ovbgv"/></g>`,
		"fallback": "withicons:avatar-man-beard-gloss",
	});
}

export default Component;
