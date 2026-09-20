import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k958jkb2a.css';
import '../../css/y/y7sy-b8ji.css';
import '../../css/u/uu0ebebnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k958jkb2a"/><path class="y7sy-b8ji"/><path class="uu0ebebnm"/></g>`,
		"fallback": "streamline-freehand:cash-payment-pen-signature",
	});
}

export default Component;
