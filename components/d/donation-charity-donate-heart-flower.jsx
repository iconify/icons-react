import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dwfi71bts.css';
import '../../css/l/ly-4xl71z.css';
import '../../css/q/qa44sh2jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dwfi71bts"/><path class="ly-4xl71z"/><path class="qa44sh2jc"/></g>`,
		"fallback": "streamline-freehand:donation-charity-donate-heart-flower",
	});
}

export default Component;
