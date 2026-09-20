import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/c/cy28a8b1v.css';
import '../../css/j/jr92re-vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="cy28a8b1v"/><path class="jr92re-vr"/></g>`,
		"fallback": "tdesign:flip-to-back",
	});
}

export default Component;
