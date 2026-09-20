import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oqg364tlq.css';
import '../../css/q/qq-clrhce.css';
import '../../css/r/r68pqmbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oqg364tlq"/><path class="qq-clrhce"/><path class="r68pqmbnf"/></g>`,
		"fallback": "streamline-freehand-color:e-commerce-cart-laptop",
	});
}

export default Component;
