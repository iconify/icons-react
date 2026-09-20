import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e87sgfbvk.css';
import '../../css/r/rz0_te-vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e87sgfbvk"/><path class="rz0_te-vw"/></g>`,
		"fallback": "streamline-freehand-color:crm-lead-distribution",
	});
}

export default Component;
