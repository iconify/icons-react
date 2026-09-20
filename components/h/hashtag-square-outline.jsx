import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/ht0ls9tcb.css';
import '../../css/h/htiiohb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ht0ls9tcb"/><path class="htiiohb4m"/></g>`,
		"fallback": "solar:hashtag-square-outline",
	});
}

export default Component;
