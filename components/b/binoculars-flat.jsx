import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j1-ghkbtj.css';
import '../../css/q/qktn93b5d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j1-ghkbtj"/><path class="qktn93b5d"/></g>`,
		"fallback": "streamline-flex-color:binoculars-flat",
	});
}

export default Component;
