import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jlr8jrb_q.css';
import '../../css/j/jkd8r3bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jlr8jrb_q"/><path class="jkd8r3bof"/></g>`,
		"fallback": "streamline-sharp-color:drawing-compass-flat",
	});
}

export default Component;
