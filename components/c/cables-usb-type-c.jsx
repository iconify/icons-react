import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/epk0drb8m.css';
import '../../css/y/ynoqnxpwc.css';
import '../../css/i/i9g5gccvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="epk0drb8m"/><path class="ynoqnxpwc"/><path class="i9g5gccvv"/></g>`,
		"fallback": "streamline-freehand-color:cables-usb-type-c",
	});
}

export default Component;
