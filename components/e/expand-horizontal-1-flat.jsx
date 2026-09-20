import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qv1ce2b3h.css';
import '../../css/n/nl6emwb6x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qv1ce2b3h"/><path class="nl6emwb6x"/></g>`,
		"fallback": "streamline-color:expand-horizontal-1-flat",
	});
}

export default Component;
