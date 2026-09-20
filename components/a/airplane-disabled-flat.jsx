import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vf421sbtr.css';
import '../../css/l/l97_d3b5v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vf421sbtr"/><path class="l97_d3b5v"/></g>`,
		"fallback": "streamline-flex-color:airplane-disabled-flat",
	});
}

export default Component;
