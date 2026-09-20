import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vu4y2kbuc.css';
import '../../css/v/vurj2ebvx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vu4y2kbuc"/><path class="vurj2ebvx"/></g>`,
		"fallback": "streamline-color:flip-vertical-circle-1-flat",
	});
}

export default Component;
