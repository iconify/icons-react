import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yijrflb7c.css';
import '../../css/p/pvfkiacfy.css';
import '../../css/h/h3t3w5b6q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yijrflb7c"/><path class="pvfkiacfy"/><path class="h3t3w5b6q"/></g>`,
		"fallback": "streamline-color:chess-king-flat",
	});
}

export default Component;
