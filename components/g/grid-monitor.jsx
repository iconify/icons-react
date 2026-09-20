import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hvr24jb0v.css';
import '../../css/i/ifgj5l01l.css';
import '../../css/m/m1i0b5bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hvr24jb0v"/><path class="ifgj5l01l"/><path class="m1i0b5bdj"/></g>`,
		"fallback": "streamline-freehand-color:grid-monitor",
	});
}

export default Component;
