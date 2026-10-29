import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j5vefub-x.css';
import '../../css/d/dvurikbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="j5vefub-x"/><path class="dvurikbcu wm-a"/></g>`,
		"fallback": "withicons:heart-pair-solid",
	});
}

export default Component;
