import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nor1toeqo.css';
import '../../css/e/ez1w0xblt.css';
import '../../css/q/q3-zht3yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nor1toeqo"/><path class="ez1w0xblt"/><path class="q3-zht3yu"/></g>`,
		"fallback": "streamline-freehand-color:cash-payment-pen-signature",
	});
}

export default Component;
