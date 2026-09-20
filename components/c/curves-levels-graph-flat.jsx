import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n1ilp1-gw.css';
import '../../css/o/o96mtmp8e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n1ilp1-gw"/><path class="o96mtmp8e"/></g>`,
		"fallback": "streamline-flex-color:curves-levels-graph-flat",
	});
}

export default Component;
