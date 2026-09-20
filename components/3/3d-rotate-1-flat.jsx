import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qgjy_wb0h.css';
import '../../css/k/kwq9utbwr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qgjy_wb0h"/><path class="kwq9utbwr"/></g>`,
		"fallback": "streamline-flex-color:3d-rotate-1-flat",
	});
}

export default Component;
