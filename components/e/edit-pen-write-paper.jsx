import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vasjeabhq.css';
import '../../css/t/tm7zpbc8c.css';
import '../../css/g/g0vqqhtgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vasjeabhq"/><path class="tm7zpbc8c"/><path class="g0vqqhtgu"/></g>`,
		"fallback": "streamline-freehand:edit-pen-write-paper",
	});
}

export default Component;
