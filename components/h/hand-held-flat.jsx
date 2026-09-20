import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd-1__-2j.css';
import '../../css/r/ru339w58w.css';
import '../../css/j/j4h73t-4q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zd-1__-2j"/><path class="ru339w58w"/><path clip-rule="evenodd" class="j4h73t-4q"/></g>`,
		"fallback": "streamline-color:hand-held-flat",
	});
}

export default Component;
