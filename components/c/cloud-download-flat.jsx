import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jig21qnib.css';
import '../../css/q/q2cdr9boa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jig21qnib"/><path class="q2cdr9boa"/></g>`,
		"fallback": "streamline-flex-color:cloud-download-flat",
	});
}

export default Component;
