import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kyqn_gl8o.css';
import '../../css/i/i8n9idimh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kyqn_gl8o"/><path class="i8n9idimh"/></g>`,
		"fallback": "streamline-color:class-lesson-flat",
	});
}

export default Component;
