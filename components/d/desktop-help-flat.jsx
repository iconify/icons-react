import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o5o1e5kcc.css';
import '../../css/k/knnie3bye.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o5o1e5kcc"/><path class="knnie3bye"/></g>`,
		"fallback": "streamline-color:desktop-help-flat",
	});
}

export default Component;
