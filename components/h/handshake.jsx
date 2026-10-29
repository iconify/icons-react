import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a39eozb4h.css';
import '../../css/o/oj34xxbcj.css';
import '../../css/k/k5-wqgb-q.css';
import '../../css/d/diyvfeblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a39eozb4h"/><path class="oj34xxbcj"/><path class="k5-wqgb-q"/><path class="diyvfeblp wm-a"/></g>`,
		"fallback": "withicons:handshake",
	});
}

export default Component;
