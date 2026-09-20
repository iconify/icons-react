import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p2i636t0j.css';
import '../../css/l/l6qc6nc8g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p2i636t0j"/><path class="l6qc6nc8g"/></g>`,
		"fallback": "streamline-color:application-add-flat",
	});
}

export default Component;
