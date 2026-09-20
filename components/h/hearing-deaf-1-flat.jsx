import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yih0bu72v.css';
import '../../css/h/h55ucqblq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yih0bu72v"/><path class="h55ucqblq"/></g>`,
		"fallback": "streamline-color:hearing-deaf-1-flat",
	});
}

export default Component;
