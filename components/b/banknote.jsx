import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bbj5cibiu.css';
import '../../css/g/g_3i-5a_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bbj5cibiu"/><path class="g_3i-5a_q wm-a"/></g>`,
		"fallback": "withicons:banknote",
	});
}

export default Component;
