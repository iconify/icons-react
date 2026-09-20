import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_kollbbl.css';
import '../../css/d/drzavmwnq.css';
import '../../css/v/vcjdpybnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t_kollbbl"/><path class="drzavmwnq"/><path class="vcjdpybnn"/></g>`,
		"fallback": "streamline-freehand-color:accounting-invoice",
	});
}

export default Component;
