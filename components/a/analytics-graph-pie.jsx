import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bdz4qyjfs.css';
import '../../css/k/kaj6b3bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bdz4qyjfs"/><path class="kaj6b3bqa"/></g>`,
		"fallback": "streamline-freehand:analytics-graph-pie",
	});
}

export default Component;
