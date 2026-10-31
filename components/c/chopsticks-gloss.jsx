import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nz6bs_9-c.css';
import '../../css/w/whsg3sbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nz6bs_9-c wm-k"/><path class="whsg3sbgf wm-a"/></g>`,
		"fallback": "withicons:chopsticks-gloss",
	});
}

export default Component;
