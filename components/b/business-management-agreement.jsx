import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e8nykcybu.css';
import '../../css/d/dn5gxfbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e8nykcybu"/><path class="dn5gxfbty"/></g>`,
		"fallback": "streamline-freehand-color:business-management-agreement",
	});
}

export default Component;
