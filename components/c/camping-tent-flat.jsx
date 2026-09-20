import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f7f3m-r6l.css';
import '../../css/o/o6gnxcb8m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f7f3m-r6l"/><path class="o6gnxcb8m"/></g>`,
		"fallback": "streamline-color:camping-tent-flat",
	});
}

export default Component;
