import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pe76b1brk.css';
import '../../css/j/jvydgjbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pe76b1brk wm-k"/><path class="jvydgjbwy wm-a"/></g>`,
		"fallback": "withicons:audio-lines-gloss",
	});
}

export default Component;
