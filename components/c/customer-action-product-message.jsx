import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b3f-zvcqr.css';
import '../../css/w/wwjgc9ifn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b3f-zvcqr"/><path class="wwjgc9ifn"/></g>`,
		"fallback": "streamline-freehand-color:customer-action-product-message",
	});
}

export default Component;
