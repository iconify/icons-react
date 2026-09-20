import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s7t5xnbcv.css';
import '../../css/z/zx6bwab7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s7t5xnbcv"/><path class="zx6bwab7c"/></g>`,
		"fallback": "streamline-freehand-color:apps-monitor-graph-line",
	});
}

export default Component;
