import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l6m87evgw.css';
import '../../css/g/gdb7q9_ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l6m87evgw"/><path class="gdb7q9_ey"/></g>`,
		"fallback": "streamline-freehand-color:delete-skull",
	});
}

export default Component;
