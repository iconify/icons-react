import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s5q-3w7wc.css';
import '../../css/x/xk60xmbbo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s5q-3w7wc"/><path class="xk60xmbbo"/></g>`,
		"fallback": "streamline-color:gif-format-flat",
	});
}

export default Component;
