import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b9mzx3j3x.css';
import '../../css/o/ozom0vbsr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b9mzx3j3x"/><path class="ozom0vbsr"/></g>`,
		"fallback": "streamline-color:flip-vertical-square-2-flat",
	});
}

export default Component;
