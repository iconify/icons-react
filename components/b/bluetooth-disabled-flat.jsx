import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/je6bcczkc.css';
import '../../css/u/uiew325xa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="je6bcczkc"/><path class="uiew325xa"/></g>`,
		"fallback": "streamline-flex-color:bluetooth-disabled-flat",
	});
}

export default Component;
