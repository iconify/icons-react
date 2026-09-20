import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hx1050b5j.css';
import '../../css/c/cmj7vgbgs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hx1050b5j"/><path class="cmj7vgbgs"/></g>`,
		"fallback": "streamline-flex-color:customer-support-7-flat",
	});
}

export default Component;
