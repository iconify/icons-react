import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vcqk8ghue.css';
import '../../css/y/ycbeb9j3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vcqk8ghue"/><path class="ycbeb9j3a"/></g>`,
		"fallback": "streamline-freehand-color:alerts-stop-sign",
	});
}

export default Component;
