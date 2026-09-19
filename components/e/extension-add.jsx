import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zet0yzbzs.css';
import '../../css/l/l_01h67je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zet0yzbzs"/><path clip-rule="evenodd" class="l_01h67je"/></g>`,
		"fallback": "gg:extension-add",
	});
}

export default Component;
