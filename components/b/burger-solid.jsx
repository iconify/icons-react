import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y7og7rbeh.css';
import '../../css/j/jt8xym7uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="y7og7rbeh"/><path class="jt8xym7uv wm-a"/></g>`,
		"fallback": "withicons:burger-solid",
	});
}

export default Component;
