import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6f2f3bqg.css';
import '../../css/q/qav0pyo6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p6f2f3bqg"/><path class="qav0pyo6j"/></g>`,
		"fallback": "healthicons:back-pain-outline-24px",
	});
}

export default Component;
