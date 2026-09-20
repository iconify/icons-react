import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yox1dbj5n.css';
import '../../css/t/t4uyk4s4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yox1dbj5n"/><path class="t4uyk4s4y"/></g>`,
		"fallback": "streamline-freehand-color:delete-bin-2",
	});
}

export default Component;
