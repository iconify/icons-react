import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ns97zhbsk.css';
import '../../css/k/ktmm6eudq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ns97zhbsk"/><path class="ktmm6eudq"/></g>`,
		"fallback": "streamline-flex-color:hierarchy-13-flat",
	});
}

export default Component;
