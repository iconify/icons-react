import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iunrxrb4q.css';
import '../../css/f/fbo-oibqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iunrxrb4q"/><path class="fbo-oibqq"/></g>`,
		"fallback": "streamline-freehand-color:human-resources-employee-crown-woman",
	});
}

export default Component;
