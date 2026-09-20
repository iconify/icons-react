import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p5d_zungf.css';
import '../../css/s/su4v-1-xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p5d_zungf"/><path class="su4v-1-xv"/></g>`,
		"fallback": "streamline-freehand-color:charging-battery-flash-connected",
	});
}

export default Component;
