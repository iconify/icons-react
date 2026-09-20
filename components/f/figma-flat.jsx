import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yl9qs5b0h.css';
import '../../css/w/w54tvjbfm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yl9qs5b0h"/><path class="w54tvjbfm"/></g>`,
		"fallback": "streamline-color:figma-flat",
	});
}

export default Component;
