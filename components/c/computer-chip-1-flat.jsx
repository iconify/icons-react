import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c_j7ak3pd.css';
import '../../css/g/g4q4f6bzj.css';
import '../../css/p/p1_pxob3g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c_j7ak3pd"/><path class="g4q4f6bzj"/><path class="p1_pxob3g"/></g>`,
		"fallback": "streamline-color:computer-chip-1-flat",
	});
}

export default Component;
