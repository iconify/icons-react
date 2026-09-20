import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l6vucebcq.css';
import '../../css/w/w2ly2-bxt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l6vucebcq"/><path class="w2ly2-bxt"/></g>`,
		"fallback": "streamline-color:cloud-check-flat",
	});
}

export default Component;
