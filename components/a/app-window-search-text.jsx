import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lcwbrcb_w.css';
import '../../css/d/d4p6j8cys.css';
import '../../css/h/hxwuq2bub.css';
import '../../css/f/fyxiijbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lcwbrcb_w"/><path class="d4p6j8cys"/><path class="hxwuq2bub"/><path class="fyxiijbhd"/></g>`,
		"fallback": "streamline-freehand:app-window-search-text",
	});
}

export default Component;
