import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d1uip-bsd.css';
import '../../css/j/j1-bdhbwm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d1uip-bsd"/><path class="j1-bdhbwm"/></g>`,
		"fallback": "heroicons:clipboard-document-check-20-solid",
	});
}

export default Component;
