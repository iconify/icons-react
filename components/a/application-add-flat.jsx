import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oc_pptalq.css';
import '../../css/q/q4jxygixc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oc_pptalq"/><path class="q4jxygixc"/></g>`,
		"fallback": "streamline-flex-color:application-add-flat",
	});
}

export default Component;
