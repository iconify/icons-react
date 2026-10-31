import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ob5t65b2c.css';
import '../../css/v/vl4fdibyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ob5t65b2c wm-k"/><path class="vl4fdibyn wm-a"/></g>`,
		"fallback": "withicons:folder-lock-gloss",
	});
}

export default Component;
