import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rlbgxoxgt.css';
import '../../css/d/d396xubqh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rlbgxoxgt"/><path class="d396xubqh"/></g>`,
		"fallback": "pepicons-pencil:flag",
	});
}

export default Component;
