import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cs7gvnb-h.css';
import '../../css/b/bgosfwbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cs7gvnb-h wm-k"/><path class="bgosfwbwc wm-a"/></g>`,
		"fallback": "withicons:fan-gloss",
	});
}

export default Component;
