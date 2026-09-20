import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n5m7zxeyf.css';
import '../../css/w/w_onk2y7k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n5m7zxeyf"/><path class="w_onk2y7k"/></g>`,
		"fallback": "streamline-flex-color:focus-frame-flat",
	});
}

export default Component;
