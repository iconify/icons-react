import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ikz9kbbuv.css';
import '../../css/c/cj25b9bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ikz9kbbuv"/><path class="cj25b9bnx"/></g>`,
		"fallback": "streamline-freehand-color:fireworks-2",
	});
}

export default Component;
