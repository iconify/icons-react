import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x2d1mxb0y.css';
import '../../css/z/zlmlysc6g.css';
import '../../css/u/urcv4fbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x2d1mxb0y"/><path class="zlmlysc6g"/><path class="urcv4fbrt"/></g>`,
		"fallback": "streamline-freehand-color:garbage-throw",
	});
}

export default Component;
