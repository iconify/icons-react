import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ee2e7izti.css';
import '../../css/w/w5p45u05p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ee2e7izti wm-k"/><path class="w5p45u05p wm-a"/></g>`,
		"fallback": "withicons:file-lock-gloss",
	});
}

export default Component;
