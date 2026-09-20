import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/ll7os3bdy.css';
import '../../css/v/vmzio8h-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ll7os3bdy"/><path class="vmzio8h-d"/></g>`,
		"fallback": "streamline-freehand-color:form-edition-number-1",
	});
}

export default Component;
