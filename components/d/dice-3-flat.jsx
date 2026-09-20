import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jtt8mubfs.css';
import '../../css/d/d8kx-5xed.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jtt8mubfs"/><path class="d8kx-5xed"/></g>`,
		"fallback": "streamline-color:dice-3-flat",
	});
}

export default Component;
