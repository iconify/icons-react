import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cefpmnbmt.css';
import '../../css/v/v0seaccsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cefpmnbmt"/><path clip-rule="evenodd" class="v0seaccsa"/></g>`,
		"fallback": "healthicons:diagnostics-24px",
	});
}

export default Component;
