import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yuna34bfy.css';
import '../../css/a/au_8-ts2e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yuna34bfy"/><path class="au_8-ts2e"/></g>`,
		"fallback": "streamline-flex-color:customer-support-5-flat",
	});
}

export default Component;
