import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/da-dk4p7e.css';
import '../../css/d/dy7-jcsld.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="da-dk4p7e"/><path class="dy7-jcsld"/></g>`,
		"fallback": "streamline-flex-color:arrow-cursor-move-flat",
	});
}

export default Component;
