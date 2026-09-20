import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d4a_vgj3q.css';
import '../../css/v/vpp0asblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d4a_vgj3q"/><path class="vpp0asblx"/></g>`,
		"fallback": "streamline-freehand-color:bug-service-chat",
	});
}

export default Component;
