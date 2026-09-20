import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h8xoa_1wy.css';
import '../../css/d/do7vwubyn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h8xoa_1wy"/><path class="do7vwubyn"/></g>`,
		"fallback": "streamline-color:cloud-warning-flat",
	});
}

export default Component;
