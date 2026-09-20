import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cshhqxb8i.css';
import '../../css/k/km-s6441z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cshhqxb8i"/><path class="km-s6441z"/></g>`,
		"fallback": "pepicons-pencil:book",
	});
}

export default Component;
