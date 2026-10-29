import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pyqaa3ltm.css';
import '../../css/t/tujzn6lmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pyqaa3ltm"/><path class="tujzn6lmw wm-a"/></g>`,
		"fallback": "withicons:banana-solid",
	});
}

export default Component;
