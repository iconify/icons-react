import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cnvc1zr7g.css';
import '../../css/j/j12p48d0g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cnvc1zr7g"/><path class="j12p48d0g"/></g>`,
		"fallback": "streamline-color:heart-rate-pulse-graph-flat",
	});
}

export default Component;
