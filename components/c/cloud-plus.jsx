import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t73_t6bky.css';
import '../../css/o/odjrbuxck.css';
import '../../css/l/l6_zgob8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t73_t6bky"/><path class="odjrbuxck"/><path class="l6_zgob8s"/></g>`,
		"fallback": "andrsrxn:cloud-plus",
	});
}

export default Component;
