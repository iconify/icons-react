import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uqtnhfbgz.css';
import '../../css/g/g_1jxb44q.css';
import '../../css/o/oge-6obhz.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uqtnhfbgz"/><path class="g_1jxb44q"/><path class="oge-6obhz"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:arrow-right-circle",
	});
}

export default Component;
