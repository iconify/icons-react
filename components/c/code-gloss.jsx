import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qtvng_b9e.css';
import '../../css/c/c63kvhb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qtvng_b9e wm-k"/><path class="c63kvhb6v wm-a"/></g>`,
		"fallback": "withicons:code-gloss",
	});
}

export default Component;
