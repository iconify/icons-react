import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ai3_rsbfn.css';
import '../../css/y/ye5wxfb1l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ai3_rsbfn"/><path class="ye5wxfb1l"/></g>`,
		"fallback": "streamline-color:hearing-deaf-2-flat",
	});
}

export default Component;
