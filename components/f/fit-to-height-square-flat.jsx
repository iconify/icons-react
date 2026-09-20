import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lxq8aubqy.css';
import '../../css/c/cr2uae9as.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lxq8aubqy"/><path class="cr2uae9as"/></g>`,
		"fallback": "streamline-color:fit-to-height-square-flat",
	});
}

export default Component;
