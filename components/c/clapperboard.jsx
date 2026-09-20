import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rim3hrmwm.css';
import '../../css/r/r8ref12dh.css';
import '../../css/o/o8ul2gb7f.css';
import '../../css/c/c_i5kdq5f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rim3hrmwm"/><path class="r8ref12dh"/><path class="o8ul2gb7f"/><path class="c_i5kdq5f"/></g>`,
		"fallback": "pepicons-pencil:clapperboard",
	});
}

export default Component;
