import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rl0cwf2eh.css';
import '../../css/f/fltwbjbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rl0cwf2eh"/><path class="fltwbjbsc"/></g>`,
		"fallback": "streamline-freehand-color:form-edition-clipboard-write",
	});
}

export default Component;
