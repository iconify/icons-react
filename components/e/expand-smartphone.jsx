import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wqghg8svo.css';
import '../../css/j/j7oedrbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wqghg8svo"/><path class="j7oedrbnc"/></g>`,
		"fallback": "streamline-freehand-color:expand-smartphone",
	});
}

export default Component;
