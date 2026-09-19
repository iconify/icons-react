import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qm4g36bqp.css';
import '../../css/s/s-lwkxmlc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qm4g36bqp"/><path class="s-lwkxmlc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fork-and-knife-with-plate",
	});
}

export default Component;
