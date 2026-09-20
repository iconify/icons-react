import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v-bupfiix.css';
import '../../css/p/p7_x0bbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v-bupfiix"/><path class="p7_x0bbad"/></g>`,
		"fallback": "streamline-freehand-color:gps-location-rectangle",
	});
}

export default Component;
