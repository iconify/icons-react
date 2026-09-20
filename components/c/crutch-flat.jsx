import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xh56y87vt.css';
import '../../css/h/hemisixzn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xh56y87vt"/><path class="hemisixzn"/></g>`,
		"fallback": "streamline-color:crutch-flat",
	});
}

export default Component;
