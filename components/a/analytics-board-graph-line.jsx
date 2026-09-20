import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z1trkttvf.css';
import '../../css/y/ycinzdh1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z1trkttvf"/><path class="ycinzdh1p"/></g>`,
		"fallback": "streamline-freehand:analytics-board-graph-line",
	});
}

export default Component;
