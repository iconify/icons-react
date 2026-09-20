import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i4jcdjo2p.css';
import '../../css/q/qdypu7b1v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i4jcdjo2p"/><path class="qdypu7b1v"/></g>`,
		"fallback": "streamline-color:descending-number-order-flat",
	});
}

export default Component;
