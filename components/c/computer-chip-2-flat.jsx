import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zw5ivtbwu.css';
import '../../css/q/q0bb-wb9a.css';
import '../../css/j/j1187el2y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zw5ivtbwu"/><path class="q0bb-wb9a"/><path class="j1187el2y"/></g>`,
		"fallback": "streamline-color:computer-chip-2-flat",
	});
}

export default Component;
