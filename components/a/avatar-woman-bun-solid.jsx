import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yryy930-r.css';
import '../../css/r/rguzy1_0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yryy930-r"/><path class="rguzy1_0v wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-bun-solid",
	});
}

export default Component;
