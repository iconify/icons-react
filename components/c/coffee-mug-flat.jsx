import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zwlhcc8op.css';
import '../../css/u/u21t81bzq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zwlhcc8op"/><path class="u21t81bzq"/></g>`,
		"fallback": "streamline-color:coffee-mug-flat",
	});
}

export default Component;
