import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pn2ogq_7k.css';
import '../../css/u/uzjbj8bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="pn2ogq_7k"/><path class="uzjbj8bwh"/></g>`,
		"fallback": "mingcute:computer-camera-line",
	});
}

export default Component;
