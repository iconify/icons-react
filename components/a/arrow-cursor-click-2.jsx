import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8-bs49fd.css';
import '../../css/l/lyc-wkbfh.css';
import '../../css/y/y0u4cjbdo.css';
import '../../css/j/jxb-dzbny.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f8-bs49fd"/><path class="lyc-wkbfh"/><path class="y0u4cjbdo"/><path class="jxb-dzbny"/></g>`,
		"fallback": "streamline-flex-color:arrow-cursor-click-2",
	});
}

export default Component;
