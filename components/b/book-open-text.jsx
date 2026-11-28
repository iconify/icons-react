import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/th4j2yb1q.css';
import '../../css/c/cyk-_qf_o.css';
import '../../css/s/sk-gc6smq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="th4j2yb1q"/><path class="cyk-_qf_o"/><path class="sk-gc6smq"/></g>`,
		"fallback": "iconaut:book-open-text",
	});
}

export default Component;
