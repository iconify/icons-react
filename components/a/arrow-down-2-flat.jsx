import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ng1bye_4b.css';
import '../../css/g/g0vhs730q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ng1bye_4b"/><path class="g0vhs730q"/></g>`,
		"fallback": "streamline-color:arrow-down-2-flat",
	});
}

export default Component;
