import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c96lugarg.css';
import '../../css/i/io_doju_t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c96lugarg"/><path class="io_doju_t"/></g>`,
		"fallback": "streamline-color:emergency-exit-flat",
	});
}

export default Component;
