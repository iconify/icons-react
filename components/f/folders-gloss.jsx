import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o19c6vb9o.css';
import '../../css/u/u73cgyakk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o19c6vb9o wm-k"/><path class="u73cgyakk wm-a"/></g>`,
		"fallback": "withicons:folders-gloss",
	});
}

export default Component;
