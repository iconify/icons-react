import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ubgj1qb4v.css';
import '../../css/n/nr-y5mbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ubgj1qb4v wm-k"/><path class="nr-y5mbby wm-s"/></g>`,
		"fallback": "withicons:cloud-cog-gloss",
	});
}

export default Component;
