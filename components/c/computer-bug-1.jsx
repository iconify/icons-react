import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qf5hx3byi.css';
import '../../css/n/n54k_2vmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qf5hx3byi"/><path class="n54k_2vmy"/></g>`,
		"fallback": "streamline-freehand:computer-bug-1",
	});
}

export default Component;
