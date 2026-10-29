import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kezjqytfm.css';
import '../../css/j/j8gfwdg-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kezjqytfm"/><path class="j8gfwdg-b wm-s"/></g>`,
		"fallback": "withicons:file-pen-solid",
	});
}

export default Component;
