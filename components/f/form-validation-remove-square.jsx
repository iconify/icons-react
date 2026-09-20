import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u5fpsfbey.css';
import '../../css/a/a1xk2sbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u5fpsfbey"/><path class="a1xk2sbcr"/></g>`,
		"fallback": "streamline-freehand:form-validation-remove-square",
	});
}

export default Component;
