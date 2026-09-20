import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iecmi3svr.css';
import '../../css/n/n5amlrb_l.css';
import '../../css/v/vtz5mzbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iecmi3svr"/><path class="n5amlrb_l"/><path class="vtz5mzbno"/></g>`,
		"fallback": "streamline-freehand-color:focus-motion",
	});
}

export default Component;
