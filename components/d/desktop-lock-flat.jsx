import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u4dcxtzzy.css';
import '../../css/y/ypa8m62mr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u4dcxtzzy"/><path class="ypa8m62mr"/></g>`,
		"fallback": "streamline-flex-color:desktop-lock-flat",
	});
}

export default Component;
