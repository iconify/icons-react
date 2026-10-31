import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tbroity_m.css';
import '../../css/f/fuyqgv2mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tbroity_m wm-k"/><path class="fuyqgv2mh wm-a"/></g>`,
		"fallback": "withicons:arrow-up-from-line-gloss",
	});
}

export default Component;
