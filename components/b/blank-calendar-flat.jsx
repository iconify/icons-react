import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cxaay7csj.css';
import '../../css/l/l-n431b0q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cxaay7csj"/><path class="l-n431b0q"/></g>`,
		"fallback": "streamline-flex-color:blank-calendar-flat",
	});
}

export default Component;
