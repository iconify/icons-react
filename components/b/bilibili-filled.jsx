import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wiea140ii.css';
import '../../css/l/lbse-vh1e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wiea140ii"/><path class="lbse-vh1e"/></g>`,
		"fallback": "ant-design:bilibili-filled",
	});
}

export default Component;
