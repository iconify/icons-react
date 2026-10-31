import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yriowb8qy.css';
import '../../css/k/kwyyv1bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k yriowb8qy"/><path class="kwyyv1bjv wm-s"/></g>`,
		"fallback": "withicons:filter-x-gloss",
	});
}

export default Component;
