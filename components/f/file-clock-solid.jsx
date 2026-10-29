import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j7w-bublw.css';
import '../../css/u/u7fxw-7hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="j7w-bublw"/><path class="u7fxw-7hv wm-s"/></g>`,
		"fallback": "withicons:file-clock-solid",
	});
}

export default Component;
