import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j4r9jsbol.css';
import '../../css/c/cnu6nwhga.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j4r9jsbol"/><path class="cnu6nwhga"/></g>`,
		"fallback": "streamline-color:fastforward-clock-flat",
	});
}

export default Component;
