import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xyb2mgbfs.css';
import '../../css/j/jn6sc_b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xyb2mgbfs"/><path class="jn6sc_b7a"/></g>`,
		"fallback": "streamline-freehand-color:analytics-graph-pie",
	});
}

export default Component;
