import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ol4ry5b0u.css';
import '../../css/u/u16_j1bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ol4ry5b0u wm-k"/><path class="u16_j1bau wm-s"/></g>`,
		"fallback": "withicons:file-pen-gloss",
	});
}

export default Component;
