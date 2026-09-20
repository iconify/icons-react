import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k0eb9ubix.css';
import '../../css/c/c3vjofgjn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k0eb9ubix"/><path class="c3vjofgjn"/></g>`,
		"fallback": "streamline-color:bluetooth-searching-flat",
	});
}

export default Component;
