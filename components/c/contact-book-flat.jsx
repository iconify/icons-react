import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s4-f90s9w.css';
import '../../css/q/qah4m-bar.css';
import '../../css/v/vcjuu9ttu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s4-f90s9w"/><path class="qah4m-bar"/><path class="vcjuu9ttu"/></g>`,
		"fallback": "streamline-flex-color:contact-book-flat",
	});
}

export default Component;
