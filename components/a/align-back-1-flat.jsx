import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k51mmccvo.css';
import '../../css/d/dw_876bvj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k51mmccvo"/><path class="dw_876bvj"/></g>`,
		"fallback": "streamline-flex-color:align-back-1-flat",
	});
}

export default Component;
