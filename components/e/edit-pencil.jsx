import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rfyhgcbjg.css';
import '../../css/n/ntbsoab1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rfyhgcbjg"/><path class="ntbsoab1y"/></g>`,
		"fallback": "streamline-freehand-color:edit-pencil",
	});
}

export default Component;
