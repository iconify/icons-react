import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ic8lny5il.css';
import '../../css/p/pn6mpxb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ic8lny5il"/><path class="pn6mpxb3h"/></g>`,
		"fallback": "solar:case-round-minimalistic-outline",
	});
}

export default Component;
