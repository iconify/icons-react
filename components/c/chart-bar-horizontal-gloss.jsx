import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x3e-w3baf.css';
import '../../css/p/p2r-q7b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k x3e-w3baf"/><path class="p2r-q7b3v wm-a"/></g>`,
		"fallback": "withicons:chart-bar-horizontal-gloss",
	});
}

export default Component;
