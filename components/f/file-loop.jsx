import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xo-dsxbwo.css';
import '../../css/c/cv5a5q_pt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xo-dsxbwo"/><path class="cv5a5q_pt"/></g>`,
		"fallback": "pepicons:file-loop",
	});
}

export default Component;
