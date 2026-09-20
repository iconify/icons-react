import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ol10f6k5p.css';
import '../../css/o/oonbsgq3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ol10f6k5p"/><path class="oonbsgq3l"/></g>`,
		"fallback": "streamline-freehand:cash-payment-bag-1",
	});
}

export default Component;
