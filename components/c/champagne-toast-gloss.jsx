import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nnef3pbai.css';
import '../../css/y/yb9ar3brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nnef3pbai wm-k"/><path class="wm-s yb9ar3brw"/></g>`,
		"fallback": "withicons:champagne-toast-gloss",
	});
}

export default Component;
